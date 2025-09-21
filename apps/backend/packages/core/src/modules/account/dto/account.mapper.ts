import { Injectable } from '@nestjs/common';
import { Account as AccountDomain } from '../entities/account.entity';
import { Account as AccountPersistence } from '../entities/account.model';
import { AccountDto } from './account.dto';

@Injectable()
export class AccountMapper {
  static toInterface(entity: AccountDomain): AccountDto {
    return new AccountDto(entity.props);
  }
  toInterface(entity: AccountDomain) {
    return AccountMapper.toInterface(entity);
  }

  static toDomain(model: AccountPersistence): AccountDomain {
    return new AccountDomain({
      ...model,
    });
  }
  toDomain(model: AccountPersistence): AccountDomain {
    return AccountMapper.toDomain(model);
  }

  static toPersistence(entity: AccountDomain) {
    return {
      ...entity.props,
    };
  }
  toPersistence(entity: AccountDomain) {
    return AccountMapper.toPersistence(entity);
  }
}
