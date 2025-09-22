import { Command } from '@nestjs/cqrs';
import { Integration } from '../entities/integration.entity';

export class IntegrationUpdatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Integration) {
    super();
  }
}
