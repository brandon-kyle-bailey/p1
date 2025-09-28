import { Command } from '@nestjs/cqrs';
import { IncommingExtensionActivity } from '../entities/incomming-extension-activity.entity';

export class IncommingExtensionActivityCreatedCommand extends Command<{
  actionId: string;
}> {
  constructor(public readonly entity: IncommingExtensionActivity) {
    super();
  }
}
