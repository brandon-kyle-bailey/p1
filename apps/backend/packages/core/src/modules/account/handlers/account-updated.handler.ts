import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AccountUpdatedCommand } from '../commands/account-updated.command';
import { Inject } from '@nestjs/common';
import { LoggingService } from '@app/logging';

@CommandHandler(AccountUpdatedCommand)
export class AccountUpdatedHandler
  implements ICommandHandler<AccountUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: AccountUpdatedCommand) {
    this.logger.debug('Account updated handler called', {
      correlationId: 'd1ebbe65-7f91-45f5-9085-0d4245428c5f',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
