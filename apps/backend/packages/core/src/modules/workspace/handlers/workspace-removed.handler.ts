import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WorkspaceRemovedCommand } from '../commands/workspace-removed.command';

@CommandHandler(WorkspaceRemovedCommand)
export class WorkspaceRemovedHandler
  implements ICommandHandler<WorkspaceRemovedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: WorkspaceRemovedCommand) {
    this.logger.debug('Workspace removed handler called', {
      correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
