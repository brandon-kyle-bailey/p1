import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppCreatedCommand } from '../commands/app-created.command';

@CommandHandler(AppCreatedCommand)
export class AppCreatedHandler implements ICommandHandler<AppCreatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AppCreatedCommand) {
    this.logger.debug('App created handler called', {
      correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
