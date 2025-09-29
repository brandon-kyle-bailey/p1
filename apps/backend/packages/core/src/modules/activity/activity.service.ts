import { LoggingService } from '@app/logging';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { NIL } from 'uuid';
import { ActivityMapper } from './dto/activity.mapper';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.model';

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

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    this.logger.debug(`${this.constructor.name}.${this.update.name} called`, {
      correlationId: '3430a322-ceab-4d97-8144-d2e66019cbbd',
      id,
      dto: JSON.stringify(updateActivityDto),
    });
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
