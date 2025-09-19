import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.model';
import { Repository } from 'typeorm';
import { AccountMapper } from './dto/account.mapper';
import { LoggingService } from '@app/logging';

const accounts: Account[] = [];

@Injectable()
export class AccountService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Account)
    private readonly repo: Repository<Account>,
    @Inject(AccountMapper)
    private readonly mapper: AccountMapper,
  ) {}
  async create(createAccountDto: CreateAccountDto) {
    this.logger.debug('Create account service called', {
      correlationId: 'f62ebb05-fc0e-4ed8-945b-f0a8b7acaef4',
    });
    const account = this.repo.create({ ...createAccountDto });
    const result = await this.repo.save(account);
    accounts.push(result);
    return this.mapper.toDomain(result);
  }

  findAll() {
    this.logger.debug('Findall account service called', {
      correlationId: 'a3b2ec3c-34c5-4026-989c-133ad55e87fd',
    });
    return accounts;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, _updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
