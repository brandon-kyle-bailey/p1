import { Command } from '@nestjs/cqrs';
import { Device } from '../entities/device.entity';

export class DeviceUpdatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Device) {
    super();
  }
}
