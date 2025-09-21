import { Command } from '@nestjs/cqrs';
import { Workspace } from '../entities/workspace.entity';

export class WorkspaceRemovedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Workspace) {
    super();
  }
}
