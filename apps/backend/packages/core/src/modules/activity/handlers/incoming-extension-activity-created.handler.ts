import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppService } from 'src/modules/app/app.service';
import { CreateAppDto } from 'src/modules/app/dto/create-app.dto';
import { NIL } from 'uuid';
import { ActivityService } from '../activity.service';
import { IncomingExtensionActivityCreatedCommand } from '../commands/incoming-extension-activity-created.command';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { AppCreatedCommand } from 'src/modules/app/commands/app-created.command';
import { ActivityCreatedCommand } from '../commands/activity-created.command';

@CommandHandler(IncomingExtensionActivityCreatedCommand)
export class IncomingExtensionActivityCreatedHandler
  implements ICommandHandler<IncomingExtensionActivityCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AppService) private readonly appService: AppService,
    @Inject(ActivityService) private readonly activityService: ActivityService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  async execute(command: IncomingExtensionActivityCreatedCommand) {
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
      createActivityDto.incomingActivityId = id;
      createActivityDto.appId = foundApp.id;
      createActivityDto.userId = userId;
      createActivityDto.source = source;
      createActivityDto.startTime = startTime;
      createActivityDto.endTime = endTime;
      createActivityDto.createdBy = userId ?? NIL;
      createActivityDto.description = `User visited ${expression} in window ${title} of ${name}`;
      const result = await this.activityService.create(createActivityDto);
      if (result) {
        void this.commandBus.execute(new ActivityCreatedCommand(result));
      }
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
