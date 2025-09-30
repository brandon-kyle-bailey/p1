import { Command } from '@nestjs/cqrs';
import { IncomingActivity } from '../entities/incoming-activity.entity';
export class IncomingActivityCreatedCommand extends Command<{
  actionId: string;
}> {
  constructor(public readonly entity: IncomingActivity) {
    super();
  }
}
