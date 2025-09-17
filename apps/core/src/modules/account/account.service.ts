import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountModel } from './account.model';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account as AccountDomain } from './entities/account.entity';
import { AccountMapper } from './account.mapper';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountModel)
    private readonly accountRepository: Repository<AccountModel>,
    private readonly accountMapper: AccountMapper,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<AccountDomain> {
    const account = this.accountRepository.create({
      ...createAccountDto,
    });
    return this.accountMapper.toDomain(
      await this.accountRepository.save(account),
    );
  }

  async findAll(): Promise<AccountDomain[]> {
    const accounts = await this.accountRepository.find({
      where: { deletedAt: undefined },
    });
    return accounts.map((account) => this.accountMapper.toDomain(account));
  }

  async findOne(id: string): Promise<AccountDomain> {
    const account = await this.accountRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!account) throw new NotFoundException(`Account ${id} not found`);
    return this.accountMapper.toDomain(account);
  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountDomain> {
    const account = await this.accountRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!account) throw new NotFoundException(`Account #${id} not found`);

    Object.assign(account, updateAccountDto);
    return this.accountMapper.toDomain(
      await this.accountRepository.save(account),
    );
  }

  async softDelete(id: string, deletedBy?: string): Promise<AccountDomain> {
    const accountRaw = await this.accountRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!accountRaw) throw new NotFoundException(`Account #${id} not found`);
    const account = this.accountMapper.toDomain(accountRaw);
    account.softDelete(deletedBy);
    return this.accountMapper.toDomain(
      await this.accountRepository.save(account),
    );
  }
}
