import { Account as AccountPersistence } from '../entities/account.model';
import { Account as AccountDomain } from '../entities/account.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountMapper {
  toDomain(model: AccountPersistence): AccountDomain {
    return new AccountDomain(model);
  }
}
