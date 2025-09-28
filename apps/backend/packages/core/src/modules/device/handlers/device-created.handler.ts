import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeviceCreatedCommand } from '../commands/device-created.command';

@CommandHandler(DeviceCreatedCommand)
export class DeviceCreatedHandler
  implements ICommandHandler<DeviceCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DeviceCreatedCommand) {
    this.logger.debug('Device created handler called', {
      correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
