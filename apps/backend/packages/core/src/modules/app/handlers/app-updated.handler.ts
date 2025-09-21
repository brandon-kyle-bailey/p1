import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppUpdatedCommand } from '../commands/app-updated.command';

@CommandHandler(AppUpdatedCommand)
export class AppUpdatedHandler implements ICommandHandler<AppUpdatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AppUpdatedCommand) {
    this.logger.debug('App updated handler called', {
      correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
