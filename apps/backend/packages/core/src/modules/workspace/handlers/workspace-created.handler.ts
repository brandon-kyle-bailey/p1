import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { WorkspaceCreatedCommand } from '../commands/workspace-created.command';

@CommandHandler(WorkspaceCreatedCommand)
export class WorkspaceCreatedHandler
  implements ICommandHandler<WorkspaceCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: WorkspaceCreatedCommand) {
    this.logger.debug('Workspace created handler called', {
      correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
