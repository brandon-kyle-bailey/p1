import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserUpdatedCommand } from '../commands/user-updated.command';

@CommandHandler(UserUpdatedCommand)
export class UserUpdatedHandler implements ICommandHandler<UserUpdatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: UserUpdatedCommand) {
    this.logger.debug('User updated handler called', {
      correlationId: '3a5bd5b9-bb97-41b4-aa3e-d7d7e8cd88eb',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
