import { Command } from '@nestjs/cqrs';
import { App } from '../entities/app.entity';

export class AppCreatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: App) {
    super();
  }
}
