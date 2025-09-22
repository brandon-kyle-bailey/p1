import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateIntegrationDto } from './dto/create-integration.dto';
import { UpdateIntegrationDto } from './dto/update-integration.dto';
import { IntegrationMapper } from './dto/integration.mapper';
import { Integration as IntegrationDomain } from './entities/integration.entity';
import { Integration } from './entities/integration.model';

@Injectable()
export class IntegrationService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Integration)
    private readonly repo: Repository<Integration>,
    @Inject(IntegrationMapper)
    private readonly mapper: IntegrationMapper,
  ) {}

  async createWithManager(
    createIntegrationDto: CreateIntegrationDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Integration);
    const entity = repo.create({ ...createIntegrationDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createIntegrationDto: CreateIntegrationDto, createdBy: string) {
    // TODO:... move to transaction
    const entity = this.repo.create({ ...createIntegrationDto, createdBy });
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

  async findOne(id: string): Promise<IntegrationDomain> {
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

  async findOneByName(name: string): Promise<IntegrationDomain> {
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
    updateIntegrationDto: UpdateIntegrationDto,
    manager: EntityManager,
  ): Promise<IntegrationDomain> {
    try {
      const repo = manager.getRepository(Integration);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateIntegrationDto.name) {
        entity.updateName(updateIntegrationDto.name);
      }
      if (updateIntegrationDto.createdBy) {
        entity.updateOwner(updateIntegrationDto.createdBy);
      }
      if (updateIntegrationDto.updatedBy) {
        entity.updateUpdatedBy(updateIntegrationDto.updatedBy);
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
    updateIntegrationDto: UpdateIntegrationDto,
    updatedBy: string,
  ): Promise<IntegrationDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateIntegrationDto.name) {
        entity.updateName(updateIntegrationDto.name);
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
