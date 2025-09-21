import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { AccountMapper } from './dto/account.mapper';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.model';
import { Account as AccountDomain } from './entities/account.entity';

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
      const model = await this.repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      return this.mapper.toDomain(model);
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOne.name} encountered an error`,
        {
          correlationId: 'f64ea9bf-6aae-4b87-9629-d7fe14f6c1d8',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async updateWithManager(
    id: string,
    updateAccountDto: UpdateAccountDto,
    manager: EntityManager,
  ) {
    try {
      const repo = manager.getRepository(Account);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateAccountDto.name) {
        entity.updateName(updateAccountDto.name);
      }
      if (updateAccountDto.createdBy) {
        entity.updateOwner(updateAccountDto.createdBy);
      }
      if (updateAccountDto.updatedBy) {
        entity.updateUpdatedBy(updateAccountDto.updatedBy);
      }
      await repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.updateWithManager.name} encountered an error`,
        {
          correlationId: '64746231-a49d-46eb-b945-967b18e309f0',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateAccountDto.name) {
        entity.updateName(updateAccountDto.name);
      }
      if (updateAccountDto.createdBy) {
        entity.updateOwner(updateAccountDto.createdBy);
      }
      if (updateAccountDto.updatedBy) {
        entity.updateUpdatedBy(updateAccountDto.updatedBy);
      }
      await this.repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.update.name} encountered an error`,
        {
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    try {
      const entity = await this.findOne(id);
      entity.softDelete(entity.updatedBy);
      await this.repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.remove.name} encountered an error`,
        {
          correlationId: 'c66f2ab8-2721-44f7-ba05-daa1aaf1b764',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }
}
