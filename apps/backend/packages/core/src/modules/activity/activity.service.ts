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
import { ActivityMapper } from './dto/activity.mapper';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.model';
import { Activity as ActivityDomain } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @InjectRepository(Activity)
    private readonly repo: Repository<Activity>,
    @Inject(ActivityMapper)
    private readonly mapper: ActivityMapper,
  ) {}
  async create(createActivityDto: CreateActivityDto) {
    const duration =
      new Date(createActivityDto.endTime).getTime() -
      new Date(createActivityDto.startTime).getTime();

    // activity is too short to count, drop it
    if (duration < 1000) {
      return;
    }
    const entity = this.repo.create({
      ...createActivityDto,
      duration,
      description: `${createActivityDto.description} for ${duration}ms`,
      createdBy: NIL,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<Activity>,
    sortField: keyof Activity = 'startTime',
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

  async findOne(id: string): Promise<ActivityDomain> {
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
          correlationId: '45c6f8ed-6cab-4cbe-9f08-6881844b54fc',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async updateMany(
    ids: string[],
    dto: Partial<UpdateActivityDto>,
    updatedBy: string,
  ) {
    try {
      const entities = (
        await this.repo.findBy({ incomingActivityId: In(ids) })
      ).map((entity) => this.mapper.toDomain(entity));

      for (const entity of entities) {
        if (dto.userId) entity.updateUserId(dto.userId);
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
          correlationId: 'ca35371a-1997-44ee-97b3-1edcec9f8458',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    dto: UpdateActivityDto,
    updatedBy: string,
  ): Promise<ActivityDomain> {
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
          correlationId: '3c15f8e8-7d66-4134-b172-6dfbd7b5f549',
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
