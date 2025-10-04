import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { WorkspaceUser as WorkspaceUserDomain } from './entities/workspace-user.entity';
import { WorkspaceUser } from './entities/workspace-user.model';
import { WorkspaceUserMapper } from './dto/workspace-user.mapper';
import { CreateWorkspaceUserDto } from './dto/create-workspace-user.dto';
import { UpdateWorkspaceUserDto } from './dto/update-workspace-user.dto';

@Injectable()
export class WorkspaceUserService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(WorkspaceUser)
    private readonly repo: Repository<WorkspaceUser>,
    @Inject(WorkspaceUserMapper)
    private readonly mapper: WorkspaceUserMapper,
  ) {}

  async createWithManager(
    createWorkspaceUserDto: CreateWorkspaceUserDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(WorkspaceUser);
    const entity = repo.create({ ...createWorkspaceUserDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(
    createWorkspaceUserDto: CreateWorkspaceUserDto,
    createdBy: string,
  ) {
    const entity = this.repo.create({ ...createWorkspaceUserDto, createdBy });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async update(
    id: string,
    dto: UpdateWorkspaceUserDto,
    updatedBy: string,
  ): Promise<WorkspaceUserDomain> {
    try {
      const entity = await this.findOne(id);
      entity.updateUpdatedBy(updatedBy);
      await this.repo.update(entity.id, this.mapper.toPersistence(entity));
      return entity;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.update.name} encountered an error`,
        {
          correlationId: 'fe595ed5-2001-47d7-ba42-9a171a597a9f',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<WorkspaceUser>,
    sortField: keyof WorkspaceUser = 'createdAt',
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
          correlationId: 'af8ca848-254f-44cc-bb98-75efa933f324',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string): Promise<WorkspaceUserDomain> {
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
