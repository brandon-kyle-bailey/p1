import { Command } from '@nestjs/cqrs';
import { Integration } from '../entities/integration.entity';

export class IntegrationRemovedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Integration) {
    super();
  }
}
