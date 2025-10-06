import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WorkspaceUserService } from 'src/modules/workspace/workspace-user.service';
import { ActivityUpdatedCommand } from '../commands/activity-updated.command';
import { FanoutActivityService } from '../fanout-activity.service';
import { FanoutActivityDto } from '../dto/fanout-activity.dto';
import { NIL } from 'uuid';

const BATCH_SIZE = 100;

@CommandHandler(ActivityUpdatedCommand)
export class ActivityUpdatedHandler
  implements ICommandHandler<ActivityUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(WorkspaceUserService)
    private readonly workspaceUserService: WorkspaceUserService,
    @Inject(FanoutActivityService)
    private readonly fanoutActivityService: FanoutActivityService,
  ) {}

  private async *_getWorkspaceIdsGenerator(
    command: ActivityUpdatedCommand,
  ): AsyncGenerator<string, void, unknown> {
    let skip = 0;
    const take = BATCH_SIZE;
    let hasNextPage = true;

    while (hasNextPage) {
      // TODO:... Filter on active workspace subscriptions for the given activity source and expression
      const entities = await this.workspaceUserService.findAll(skip, take, {
        accountId: command.entity.accountId,
        userId: command.entity.userId,
      });

      for (const a of entities.data) {
        yield a.workspaceId;
      }

      this.logger.debug('Fetched workspaces page', {
        correlationId: 'b3446a95-3135-4f31-87ac-093c069cc2ff',
        skip,
        take,
        activityCount: entities.data.length,
        hasNextPage: entities.pagination.hasNextPage,
      });

      hasNextPage = entities.pagination.hasNextPage;
      skip += take;
    }
  }

  async execute(command: ActivityUpdatedCommand) {
    this.logger.debug('Activity updated handler called', {
      correlationId: '3623e7de-987b-4971-9757-8b6a86592a2f',
      accountId: command.entity.accountId,
    });

    if (!command.entity.userId) {
      this.logger.debug('Activity is anonymous, skipping fanout', {
        correlationId: '54740132-ae0b-4f75-87da-6b566d708994',
        accountId: command.entity.accountId,
      });
      return { actionId: crypto.randomUUID() };
    }

    const batch: string[] = [];

    for await (const incomingId of this._getWorkspaceIdsGenerator(command)) {
      batch.push(incomingId);

      if (batch.length >= BATCH_SIZE) {
        const dtos = batch.map(
          (id) =>
            new FanoutActivityDto({
              userId: command.entity.userId,
              accountId: command.entity.accountId,
              activityId: command.entity.id,
              feedId: id,
            }),
        );
        await this.fanoutActivityService.createMany(dtos, NIL);
        batch.length = 0; // reset batch
      }
    }
    if (batch.length > 0) {
      const dtos = batch.map(
        (id) =>
          new FanoutActivityDto({
            userId: command.entity.userId,
            accountId: command.entity.accountId,
            activityId: command.entity.id,
            feedId: id,
          }),
      );
      await this.fanoutActivityService.createMany(dtos, NIL);
    }

    return { actionId: crypto.randomUUID() };
  }
}
