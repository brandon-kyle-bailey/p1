import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AccountCreatedCommand } from '../commands/account-created.command';
import { Inject } from '@nestjs/common';
import { LoggingService } from '@app/logging';

@CommandHandler(AccountCreatedCommand)
export class AccountCreatedHandler
  implements ICommandHandler<AccountCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AccountCreatedCommand) {
    this.logger.debug('Account created handler called', {
      correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
