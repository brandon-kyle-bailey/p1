import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeviceUpdatedCommand } from '../commands/device-updated.command';
import { ActivityService } from 'src/modules/activity/activity.service';
import { IncomingActivityService } from 'src/modules/activity/incoming-activity.service';
import { UpdateActivityDto } from 'src/modules/activity/dto/update-activity.dto';
import { NIL } from 'uuid';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { ActivityUpdatedCommand } from 'src/modules/activity/commands/activity-updated.command';

const BATCH_SIZE = 100;

@CommandHandler(DeviceUpdatedCommand)
export class DeviceUpdatedHandler
  implements ICommandHandler<DeviceUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(ActivityService)
    private readonly activityService: ActivityService,
    @Inject(IncomingActivityService)
    private readonly incomingActivityService: IncomingActivityService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  private async *_getIncomingActivityIdsGenerator(
    command: DeviceUpdatedCommand,
  ): AsyncGenerator<string, void, unknown> {
    let skip = 0;
    const take = BATCH_SIZE;
    let hasNextPage = true;

    while (hasNextPage) {
      const activities = await this.incomingActivityService.findAll(
        skip,
        take,
        {
          accountId: command.entity.accountId,
          ipAddress: command.entity.ipAddress,
          hostuser: command.entity.hostuser,
          hostname: command.entity.hostname,
          macAddress: command.entity.macAddress,
          os: command.entity.os,
          arch: command.entity.arch,
          userId: undefined,
        },
      );

      for (const a of activities.data) {
        yield a.id;
      }

      this.logger.debug('Fetched incoming activities page', {
        correlationId: 'b3446a95-3135-4f31-87ac-093c069cc2ff',
        skip,
        take,
        activityCount: activities.data.length,
        hasNextPage: activities.pagination.hasNextPage,
      });

      hasNextPage = activities.pagination.hasNextPage;
      skip += take;
    }
  }

  async execute(command: DeviceUpdatedCommand) {
    this.logger.debug('Device updated handler called', {
      correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
      accountId: command.entity.accountId,
    });

    const batch: string[] = [];
    const updated: Activity[] = [];

    const dto = new UpdateActivityDto();
    for await (const incomingId of this._getIncomingActivityIdsGenerator(
      command,
    )) {
      batch.push(incomingId);

      if (batch.length >= BATCH_SIZE) {
        dto.userId = command.entity.userId;
        updated.push(
          ...(await this.activityService.updateMany(batch, dto, NIL)),
        );
        batch.length = 0; // reset batch
      }
    }
    if (batch.length > 0) {
      updated.push(...(await this.activityService.updateMany(batch, dto, NIL)));
    }
    updated.map((activity) => {
      void this.commandBus.execute(new ActivityUpdatedCommand(activity));
    });

    return { actionId: crypto.randomUUID() };
  }
}
