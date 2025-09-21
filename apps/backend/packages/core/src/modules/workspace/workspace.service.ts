import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspaceMapper } from './dto/workspace.mapper';
import { Workspace as WorkspaceDomain } from './entities/workspace.entity';
import { Workspace } from './entities/workspace.model';
import { WorkspaceUser } from './entities/workspace-user.model';

@Injectable()
export class WorkspaceService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Workspace)
    private readonly repo: Repository<Workspace>,
    @InjectRepository(WorkspaceUser)
    private readonly workspaceUserRepo: Repository<WorkspaceUser>,
    @Inject(WorkspaceMapper)
    private readonly mapper: WorkspaceMapper,
  ) {}

  async createWithManager(
    createWorkspaceDto: CreateWorkspaceDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Workspace);
    const entity = repo.create({ ...createWorkspaceDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createWorkspaceDto: CreateWorkspaceDto, createdBy: string) {
    // TODO:... move to transaction
    const entity = this.repo.create({ ...createWorkspaceDto, createdBy });
    const result = await this.repo.save(entity);
    const wu = this.workspaceUserRepo.create({
      workspaceId: result.id,
      userId: createdBy,
      createdBy,
    });
    await this.workspaceUserRepo.save(wu);
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

  async findOne(id: string): Promise<WorkspaceDomain> {
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

  async findOneByName(name: string): Promise<WorkspaceDomain> {
    try {
      const model = await this.repo.findOneBy({ name });
      if (!model) {
        throw new NotFoundException();
      }
      return this.mapper.toDomain(model);
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOneByName.name} encountered an error`,
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
    updateWorkspaceDto: UpdateWorkspaceDto,
    manager: EntityManager,
  ): Promise<WorkspaceDomain> {
    try {
      const repo = manager.getRepository(Workspace);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateWorkspaceDto.name) {
        entity.updateName(updateWorkspaceDto.name);
      }
      if (updateWorkspaceDto.createdBy) {
        entity.updateOwner(updateWorkspaceDto.createdBy);
      }
      if (updateWorkspaceDto.updatedBy) {
        entity.updateUpdatedBy(updateWorkspaceDto.updatedBy);
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
    updateWorkspaceDto: UpdateWorkspaceDto,
    updatedBy: string,
  ): Promise<WorkspaceDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateWorkspaceDto.name) {
        entity.updateName(updateWorkspaceDto.name);
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
