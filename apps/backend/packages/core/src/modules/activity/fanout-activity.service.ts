import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { NIL } from 'uuid';
import { FanoutActivityMapper } from './dto/fanout-activity.mapper';
import { UpdateFanoutActivityDto } from './dto/update-fanout-activity.dto';
import { FanoutActivity } from './entities/fanout-activity.model';
import { FanoutActivity as FanoutActivityDomain } from './entities/fanout-activity.entity';
import { CreateFanoutActivityDto } from './dto/create-fanout-activity.dto';

@Injectable()
export class FanoutActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @InjectRepository(FanoutActivity)
    private readonly repo: Repository<FanoutActivity>,
    @Inject(FanoutActivityMapper)
    private readonly mapper: FanoutActivityMapper,
  ) {}
  async create(createFanoutActivityDto: CreateFanoutActivityDto) {
    const entity = this.repo.create({
      ...createFanoutActivityDto,
      createdBy: NIL,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async createMany(dtos: CreateFanoutActivityDto[], createdBy: string) {
    try {
      const entities = dtos.map((dto) =>
        this.repo.create({
          ...dto,
          createdBy,
          updatedBy: createdBy,
        }),
      );

      const saved = await this.repo.save(entities);
      return saved.map((entity) => this.mapper.toDomain(entity));
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.createMany.name} encountered an error`,
        {
          correlationId: 'cf13c5bf-5267-4955-81d1-b8fd51d721d6',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<FanoutActivity>,
    sortField: keyof FanoutActivity = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try {
      const [entities, count] = await this.repo.findAndCount({
        skip,
        take,
        where,
        order: { [sortField]: sortOrder.toUpperCase() as 'ASC' | 'DESC' },
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
          correlationId: 'f66417c8-e4e1-4d23-96ad-57ce2b367a2b',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string): Promise<FanoutActivityDomain> {
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
          correlationId: '69cdcc2b-134a-411b-a62f-dc87eca73ce9',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async updateMany(
    ids: string[],
    dto: Partial<UpdateFanoutActivityDto>,
    updatedBy: string,
  ) {
    try {
      const entities = (await this.repo.findBy({ id: In(ids) })).map((entity) =>
        this.mapper.toDomain(entity),
      );

      for (const entity of entities) {
        if (dto.userId) {
          entity.updateUserId(dto.userId);
        }
        entity.updateUpdatedBy(updatedBy);
      }

      await Promise.all(
        entities.map((entity) =>
          this.repo.update(entity.id, this.mapper.toPersistence(entity)),
        ),
      );

      return entities;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.updateMany.name} encountered an error`,
        {
          correlationId: '8b65d685-b723-4f9d-b637-d945341e151c',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    dto: UpdateFanoutActivityDto,
    updatedBy: string,
  ): Promise<FanoutActivityDomain> {
    try {
      const entity = await this.findOne(id);
      if (dto.userId) {
        entity.updateUserId(dto.userId);
      }
      entity.updateUpdatedBy(updatedBy);
      await this.repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.update.name} encountered an error`,
        {
          correlationId: 'c5cc7c66-343b-408a-afa9-628f1770235d',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  remove(id: string) {
    return `This action removes a #${id} activity`;
  }
}
