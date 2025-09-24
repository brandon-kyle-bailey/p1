import { Command } from '@nestjs/cqrs';
import { Subscription } from '../entities/subscription.entity';

export class SubscriptionRemovedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Subscription) {
    super();
  }
}
