import { Command } from '@nestjs/cqrs';
import { Workspace } from '../entities/workspace.entity';

export class WorkspaceUpdatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Workspace) {
    super();
  }
}
