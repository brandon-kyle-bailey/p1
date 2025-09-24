import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { SubscriptionMapper } from './dto/subscription.mapper';
import { Subscription as SubscriptionDomain } from './entities/subscription.entity';
import { Subscription } from './entities/subscription.model';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Subscription)
    private readonly repo: Repository<Subscription>,
    @Inject(SubscriptionMapper)
    private readonly mapper: SubscriptionMapper,
  ) {}

  async createWithManager(
    createSubscriptionDto: CreateSubscriptionDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Subscription);
    const entity = repo.create({ ...createSubscriptionDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(
    createSubscriptionDto: CreateSubscriptionDto,
    createdBy: string,
  ) {
    // TODO:... move to transaction
    const entity = this.repo.create({ ...createSubscriptionDto, createdBy });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<Subscription>,
  ) {
    try {
      const [entities, count] = await this.repo.findAndCount({
        skip,
        take,
        where,
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
          correlationId: '6d437955-6b3a-417d-825b-3f43dedd8825',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string): Promise<SubscriptionDomain> {
    try {
      const entity = await this.repo.findOneBy({ id });
      if (!entity) {
        throw new NotFoundException();
      }
      return this.mapper.toDomain(entity);
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOne.name} encountered an error`,
        {
          correlationId: '6acb4b57-7592-4f08-869c-b4a14cddd072',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async findOneByExpression(
    expression: string,
    accountId: string,
  ): Promise<SubscriptionDomain> {
    try {
      const model = await this.repo.findOneBy({ expression, accountId });
      if (!model) {
        throw new NotFoundException();
      }
      return this.mapper.toDomain(model);
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOneByExpression.name} encountered an error`,
        {
          correlationId: '7cce84d8-8f89-4058-8d2e-af450cfad2d3',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async updateWithManager(
    id: string,
    updateSubscriptionDto: UpdateSubscriptionDto,
    manager: EntityManager,
  ): Promise<SubscriptionDomain> {
    try {
      const repo = manager.getRepository(Subscription);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateSubscriptionDto.expression) {
        entity.updateExpression(updateSubscriptionDto.expression);
      }
      if (updateSubscriptionDto.createdBy) {
        entity.updateOwner(updateSubscriptionDto.createdBy);
      }
      if (updateSubscriptionDto.updatedBy) {
        entity.updateUpdatedBy(updateSubscriptionDto.updatedBy);
      }
      await repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.updateWithManager.name} encountered an error`,
        {
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateSubscriptionDto: UpdateSubscriptionDto,
    updatedBy: string,
  ): Promise<SubscriptionDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateSubscriptionDto.expression) {
        entity.updateExpression(updateSubscriptionDto.expression);
      }
      entity.updateUpdatedBy(updatedBy);
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

  async remove(id: string, removedBy: string) {
    try {
      const entity = await this.findOne(id);
      entity.softDelete(removedBy);
      await this.repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.remove.name} encountered an error`,
        {
          correlationId: 'b76287ba-c244-475f-adcb-52c6917ba739',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }
}
