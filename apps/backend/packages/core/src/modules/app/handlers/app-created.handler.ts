import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppCreatedCommand } from '../commands/app-created.command';
import { AiService } from 'src/modules/ai/ai.service';
import { v4 } from 'uuid';
import { AppService } from '../app.service';
import { UpdateAppDto } from '../dto/update-app.dto';
import { Category } from '../entities/app.entity';

@CommandHandler(AppCreatedCommand)
export class AppCreatedHandler implements ICommandHandler<AppCreatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AiService) private readonly aiService: AiService,
    @Inject(AppService) private readonly appService: AppService,
  ) {}

  async execute(command: AppCreatedCommand) {
    try {
      if (!command.entity.description) {
        const modelId = 'gpt-4o-mini-2024-07-18';
        const [description, category] = await Promise.all([
          this.aiService.processGenericPrompt({
            modelId,
            id: '9cae780f-327b-4e33-88f0-6f32adb6bf6c',
            conversationId: 'f3c38e59-3f1f-4f7f-bb6b-090e8bf0530f',
            timestamp: Date.now(),
            content: `Write a concise, one-sentence description of the app or software represented by the following package name: ${command.entity.name}. Focus on its main purpose or functionality, avoiding marketing fluff or unrelated details.`,
            contentType: 'text',
            debug: false,
          }),
          this.aiService.processGenericPrompt({
            modelId,
            id: '9cae780f-327b-4e33-88f0-6f32adb6bf6c',
            conversationId: 'f3c38e59-3f1f-4f7f-bb6b-090e8bf0530f',
            timestamp: Date.now(),
            content: `Given the app ${command.entity.name}, determine the single most appropriate category from the following list: ${Object.values(Category).join(',')}. Focus on the app's primary use or function, not Keywords. Return only the category, without explanation or additional text.`,
            contentType: 'text',
            debug: false,
          }),
        ]);
        const updateDto = new UpdateAppDto();
        updateDto.description = description.content;
        updateDto.category = category.content as Category;
        await this.appService.update(
          command.entity.id,
          updateDto,
          command.entity.createdBy!,
        );
      }
    } catch (error) {
      this.logger.error(error, {
        correlationId: '25b0fffe-51d3-4aa6-b363-3da4cbdfeee3',
      });
    }
    return {
      actionId: v4(),
    };
  }
}
