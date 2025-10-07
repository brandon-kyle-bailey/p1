import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ActivityCreatedCommand } from '../commands/activity-created.command';

@CommandHandler(ActivityCreatedCommand)
export class ActivityCreatedHandler
  implements ICommandHandler<ActivityCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(command: ActivityCreatedCommand) {
    return await Promise.resolve({ actionId: crypto.randomUUID() });
  }
}
