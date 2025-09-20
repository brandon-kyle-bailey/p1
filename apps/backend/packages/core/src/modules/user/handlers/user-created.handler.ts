import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserCreatedCommand } from '../commands/user-created.command';

@CommandHandler(UserCreatedCommand)
export class UserCreatedHandler implements ICommandHandler<UserCreatedCommand> {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: UserCreatedCommand) {
    this.logger.debug('User created handler called', {
      correlationId: '23b10edb-86ee-45fe-ba6c-43ff8200c57f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
