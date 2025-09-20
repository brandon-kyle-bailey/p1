import { Injectable } from '@nestjs/common';
import { Account as AccountDomain } from '../entities/account.entity';
import { Account as AccountPersistence } from '../entities/account.model';

@Injectable()
export class AccountMapper {
  static toDomain(model: AccountPersistence): AccountDomain {
    return new AccountDomain({
      ...model,
    });
  }
  toDomain(model: AccountPersistence): AccountDomain {
    return AccountMapper.toDomain(model);
  }
}
