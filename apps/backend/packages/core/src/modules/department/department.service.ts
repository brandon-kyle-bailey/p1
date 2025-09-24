import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { DepartmentMapper } from './dto/department.mapper';
import { Department as DepartmentDomain } from './entities/department.entity';
import { Department } from './entities/department.model';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Department)
    private readonly repo: Repository<Department>,
    @Inject(DepartmentMapper)
    private readonly mapper: DepartmentMapper,
  ) {}

  async createWithManager(
    createDepartmentDto: CreateDepartmentDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Department);
    const entity = repo.create({ ...createDepartmentDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createDepartmentDto: CreateDepartmentDto, createdBy: string) {
    // TODO:... move to transaction
    const entity = this.repo.create({ ...createDepartmentDto, createdBy });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<Department>,
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

  async findOne(id: string): Promise<DepartmentDomain> {
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

  async findOneByName(name: string): Promise<DepartmentDomain> {
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
    updateDepartmentDto: UpdateDepartmentDto,
    manager: EntityManager,
  ): Promise<DepartmentDomain> {
    try {
      const repo = manager.getRepository(Department);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateDepartmentDto.name) {
        entity.updateName(updateDepartmentDto.name);
      }
      if (updateDepartmentDto.createdBy) {
        entity.updateOwner(updateDepartmentDto.createdBy);
      }
      if (updateDepartmentDto.updatedBy) {
        entity.updateUpdatedBy(updateDepartmentDto.updatedBy);
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
    updateDepartmentDto: UpdateDepartmentDto,
    updatedBy: string,
  ): Promise<DepartmentDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateDepartmentDto.name) {
        entity.updateName(updateDepartmentDto.name);
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
