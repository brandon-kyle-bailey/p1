import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AccountRemovedCommand } from '../commands/account-removed.command';
import { Inject } from '@nestjs/common';
import { LoggingService } from '@app/logging';

@CommandHandler(AccountRemovedCommand)
export class AccountRemovedHandler
  implements ICommandHandler<AccountRemovedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AccountRemovedCommand) {
    this.logger.debug('Account removed handler called', {
      correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
