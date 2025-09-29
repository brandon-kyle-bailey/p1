import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppService } from 'src/modules/app/app.service';
import { CreateAppDto } from 'src/modules/app/dto/create-app.dto';
import { NIL } from 'uuid';
import { ActivityService } from '../activity.service';
import { IncommingExtensionActivityCreatedCommand } from '../commands/incomming-extension-activity-created.command';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { AppCreatedCommand } from 'src/modules/app/commands/app-created.command';

@CommandHandler(IncommingExtensionActivityCreatedCommand)
export class IncommingExtensionActivityCreatedHandler
  implements ICommandHandler<IncommingExtensionActivityCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AppService) private readonly appService: AppService,
    @Inject(ActivityService) private readonly activityService: ActivityService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  async execute(command: IncommingExtensionActivityCreatedCommand) {
    try {
      const {
        id,
        accountId,
        userId,
        name,
        title,
        source,
        expression,
        startTime,
        endTime,
      } = command.entity;

      // app discovery
      let foundApp = await this.appService.findOneByName(name, accountId);
      if (!foundApp) {
        const createAppDto = new CreateAppDto();
        createAppDto.name = name;
        createAppDto.accountId = accountId;
        foundApp = await this.appService.create(createAppDto, NIL);
        void this.commandBus.execute(new AppCreatedCommand(foundApp));
      }

      // activity creation
      const createActivityDto = new CreateActivityDto();
      createActivityDto.accountId = accountId;
      createActivityDto.incommingActivityId = id;
      createActivityDto.appId = foundApp.id;
      createActivityDto.userId = userId;
      createActivityDto.source = source;
      createActivityDto.startTime = startTime;
      createActivityDto.endTime = endTime;
      createActivityDto.createdBy = userId ?? NIL;
      createActivityDto.description = `User visited ${expression} in window ${title} of ${name}`;
      await this.activityService.create(createActivityDto);
    } catch (error) {
      this.logger.error(error, {
        correlationId: 'dd447c82-4e60-4b6e-b856-f356ca5c39cb',
      });
    }

    return {
      actionId: crypto.randomUUID(),
    };
  }
}
