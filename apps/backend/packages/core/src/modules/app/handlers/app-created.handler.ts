import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppCreatedCommand } from '../commands/app-created.command';
import { AiService } from 'src/modules/ai/ai.service';
import { v4 } from 'uuid';
import { AppService } from '../app.service';
import { UpdateAppDto } from '../dto/update-app.dto';

@CommandHandler(AppCreatedCommand)
export class AppCreatedHandler implements ICommandHandler<AppCreatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AiService) private readonly aiService: AiService,
    @Inject(AppService) private readonly appService: AppService,
  ) {}

  async execute(command: AppCreatedCommand) {
    this.logger.debug('App created handler called', {
      correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
      command: JSON.stringify(command),
    });
    const description = await this.aiService.processGenericPrompt({
      modelId: 'gpt-4o-mini-2024-07-18',
      id: v4(),
      conversationId: 'f3c38e59-3f1f-4f7f-bb6b-090e8bf0530f',
      timestamp: Date.now(),
      content: `Provide a short description of this app based on its name: ${command.entity.name}`,
      contentType: 'text',
      debug: false,
    });

    this.logger.debug(
      `App description auto generated from ai for app: ${command.entity.id}`,
      {
        correlationId: '7f12ee2c-2710-48cf-9fc0-27e3ef2169c5',
        appId: command.entity.id,
        description: JSON.stringify(description),
      },
    );
    const updateDto = new UpdateAppDto();
    updateDto.description = description.content;
    await this.appService.update(
      command.entity.id,
      updateDto,
      command.entity.createdBy!,
    );
    return {
      actionId: v4(),
    };
  }
}
