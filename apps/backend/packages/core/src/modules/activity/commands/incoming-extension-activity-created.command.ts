import { Command } from '@nestjs/cqrs';
import { IncomingExtensionActivity } from '../entities/incoming-extension-activity.entity';

export class IncomingExtensionActivityCreatedCommand extends Command<{
  actionId: string;
}> {
  constructor(public readonly entity: IncomingExtensionActivity) {
    super();
  }
}
