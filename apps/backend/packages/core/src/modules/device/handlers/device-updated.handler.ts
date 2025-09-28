import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeviceUpdatedCommand } from '../commands/device-updated.command';

@CommandHandler(DeviceUpdatedCommand)
export class DeviceUpdatedHandler
  implements ICommandHandler<DeviceUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DeviceUpdatedCommand) {
    this.logger.debug('Device updated handler called', {
      correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
