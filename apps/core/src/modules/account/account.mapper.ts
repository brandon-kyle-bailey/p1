import { AccountModel } from './account.model';
import { Account } from './entities/account.entity';

export class AccountMapper {
  toDomain(account: AccountModel): Account {
    return new Account({ ...account });
  }
}
