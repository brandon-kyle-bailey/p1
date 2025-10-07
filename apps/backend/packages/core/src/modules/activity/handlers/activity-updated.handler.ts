import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ActivityUpdatedCommand } from '../commands/activity-updated.command';

@CommandHandler(ActivityUpdatedCommand)
export class ActivityUpdatedHandler
  implements ICommandHandler<ActivityUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: ActivityUpdatedCommand) {
    this.logger.debug(`${this.constructor.name}.${this.execute.name} called.`, {
      correlationId: '67976b40-3df4-4b0e-b079-44189c4772f7',
      command: JSON.stringify(command),
    });
    return await Promise.resolve({ actionId: crypto.randomUUID() });
  }
}
