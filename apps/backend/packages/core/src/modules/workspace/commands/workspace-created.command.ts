import { Command } from '@nestjs/cqrs';
import { Workspace } from '../entities/workspace.entity';

export class WorkspaceCreatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Workspace) {
    super();
  }
}
