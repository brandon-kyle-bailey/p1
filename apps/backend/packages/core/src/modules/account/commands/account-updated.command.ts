import { Command } from '@nestjs/cqrs';
import { Account } from '../entities/account.entity';

export class AccountUpdatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Account) {
    super();
  }
}
