import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRemovedCommand } from '../commands/user-removed.command';

@CommandHandler(UserRemovedCommand)
export class UserRemovedHandler implements ICommandHandler<UserRemovedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: UserRemovedCommand) {
    this.logger.debug('User removed handler called', {
      correlationId: '020bea7d-6b78-46f9-a247-b792b5b16621',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
