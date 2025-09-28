import { Command } from '@nestjs/cqrs';
import { Activity } from '../entities/activity.entity';

export class ActivityCreatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Activity) {
    super();
  }
}
