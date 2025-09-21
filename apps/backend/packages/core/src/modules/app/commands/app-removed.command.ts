import { Command } from '@nestjs/cqrs';
import { App } from '../entities/app.entity';

export class AppRemovedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: App) {
    super();
  }
}
