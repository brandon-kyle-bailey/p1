import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WorkspaceUpdatedCommand } from '../commands/workspace-updated.command';

@CommandHandler(WorkspaceUpdatedCommand)
export class WorkspaceUpdatedHandler
  implements ICommandHandler<WorkspaceUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: WorkspaceUpdatedCommand) {
    this.logger.debug('Workspace updated handler called', {
      correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
