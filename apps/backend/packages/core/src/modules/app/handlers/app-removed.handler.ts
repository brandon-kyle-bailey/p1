import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppRemovedCommand } from '../commands/app-removed.command';

@CommandHandler(AppRemovedCommand)
export class AppRemovedHandler implements ICommandHandler<AppRemovedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AppRemovedCommand) {
    this.logger.debug('App removed handler called', {
      correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
