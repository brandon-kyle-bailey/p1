import { LoggingService } from '@app/logging';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { NIL } from 'uuid';
import { CreateIncomingActivityDto } from './dto/create-incoming-activity.dto';
import { IncomingActivity } from './entities/incoming-activity.model';
import { IncomingActivityMapper } from './dto/incoming-activity.mapper';
import { CreateIncomingExtensionActivityDto } from './dto/create-incoming-extension-activity.dto';

@Injectable()
export class IncomingActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @InjectRepository(IncomingActivity)
    private readonly repo: Repository<IncomingActivity>,
    @Inject(IncomingActivityMapper)
    private readonly mapper: IncomingActivityMapper,
  ) {}
  async create(
    dto: CreateIncomingActivityDto | CreateIncomingExtensionActivityDto,
  ) {
    // activity is bad, drop it.
    if (
      [
        dto.name.toLowerCase(),
        dto.title.toLowerCase(),
        dto.expression.toLowerCase(),
      ].includes('unknown')
    ) {
      return;
    }

    const entity = this.repo.create({
      ...dto,
      createdBy: NIL,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<IncomingActivity>,
    sortField: keyof IncomingActivity = 'startTime',
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
          correlationId: '97a956dd-9f50-491a-9a2a-3791b5bfac01',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }
}
