import { Command } from '@nestjs/cqrs';
import { App } from '../entities/app.entity';

export class AppUpdatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: App) {
    super();
  }
}
