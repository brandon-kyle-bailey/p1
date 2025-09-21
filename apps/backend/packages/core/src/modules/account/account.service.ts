import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.model';
import { EntityManager, Repository } from 'typeorm';
import { AccountMapper } from './dto/account.mapper';
import { LoggingService } from '@app/logging';

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

  async createWithManager(
    createAccountDto: CreateAccountDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Account);
    const entity = repo.create({ ...createAccountDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createAccountDto: CreateAccountDto) {
    const entity = this.repo.create({ ...createAccountDto });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(skip: number = 0, take: number = 100) {
    try {
      const [entities, count] = await this.repo.findAndCount({
        skip,
        take,
      });
      return {
        data: entities.map((entity) => this.mapper.toDomain(entity)),
        pagination: {
          total: count,
          skip,
          take,
          hasNextPage: skip + take < count,
        },
      };
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findAll.name} encountered an error`,
        {
          correlationId: '56268dfa-a78d-4865-8d03-504515d8287c',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string) {
    try {
      const entity = await this.repo.findOneBy({ id });
      if (entity) {
        return this.mapper.toDomain(entity);
      }
      return {};
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOne.name} encountered an error`,
        {
          correlationId: 'f64ea9bf-6aae-4b87-9629-d7fe14f6c1d8',
          err: JSON.stringify(err),
        },
      );
      return {};
    }
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account with: ${JSON.stringify(updateAccountDto)}`;
  }

  remove(id: string) {
    return `This action removes a #${id} account`;
  }
}
