import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeviceRemovedCommand } from '../commands/device-removed.command';

@CommandHandler(DeviceRemovedCommand)
export class DeviceRemovedHandler
  implements ICommandHandler<DeviceRemovedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DeviceRemovedCommand) {
    this.logger.debug('Device removed handler called', {
      correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
