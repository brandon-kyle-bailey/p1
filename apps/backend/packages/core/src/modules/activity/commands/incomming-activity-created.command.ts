import { Command } from '@nestjs/cqrs';
import { IncommingActivity } from '../entities/incomming-activity.entity';
export class IncommingActivityCreatedCommand extends Command<{
  actionId: string;
}> {
  constructor(public readonly entity: IncommingActivity) {
    super();
  }
}
