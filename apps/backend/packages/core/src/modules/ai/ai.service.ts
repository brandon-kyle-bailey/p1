import { LoggingService } from '@app/logging';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { v4 } from 'uuid';

export interface CompletionDeps {
  model: string;
  prompt: string;
  context: string;
  completionPrompt: (prompt: string, context: string) => string;
}

export interface ClassifyPromptDeps {
  model: string;
  classificationSchema: any;
  classificationPrompt: string;
  classificationKey: string;
  prompt: string;
}

export interface Message {
  modelId: string;
  id: string;
  conversationId: string;
  timestamp: number;
  content: string;
  contentType: string;
  debug: boolean;
}

@Injectable()
@UseInterceptors(CacheInterceptor)
export class AiService {
  _instance: OpenAI;
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(LoggingService) private readonly logger: LoggingService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this._instance = new OpenAI({ apiKey });
  }

  async processGenericPrompt(req: Message): Promise<Message> {
    try {
      const sanitizedModel = req.modelId.split(':')[0];
      const completion = await this._completion({
        model: sanitizedModel,
        prompt: req.content,
        context: '',
        completionPrompt(prompt, context) {
          return prompt + context;
        },
      });
      return {
        modelId: req.modelId,
        conversationId: req.conversationId,
        debug: req.debug,
        content: completion,
        contentType: 'text',
        id: v4(),
        timestamp: Date.now(),
      };
    } catch (error) {
      this.logger.error(
        `${this.constructor.name}.${this._completion.name} encountered an error`,
        {
          correlationId: 'ccaf8ee4-042f-41b3-9333-ee91faf2e94c',
          error: JSON.stringify(error),
        },
      );
      throw new InternalServerErrorException(error);
    }
  }

  private async _completion(deps: CompletionDeps): Promise<string> {
    try {
      const completion = await this._instance.chat.completions.create({
        model: deps.model,
        messages: [
          {
            role: 'system',
            content: deps.completionPrompt(deps.prompt, deps.context),
          },
        ],
      });
      return completion.choices[0].message.content!;
    } catch (error) {
      this.logger.error(
        `${this.constructor.name}.${this._completion.name} encountered an error`,
        {
          correlationId: 'a08ff1ff-c86a-47b5-bbf8-0be77c76e4de',
          error: JSON.stringify(error),
        },
      );
      throw new InternalServerErrorException(error);
    }
  }
}
