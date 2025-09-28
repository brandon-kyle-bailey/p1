import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { AppMapper } from './dto/app.mapper';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { App as AppDomain } from './entities/app.entity';
import { App } from './entities/app.model';

@Injectable()
export class AppService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(App)
    private readonly repo: Repository<App>,
    @Inject(AppMapper)
    private readonly mapper: AppMapper,
  ) {}

  async createWithManager(createAppDto: CreateAppDto, manager: EntityManager) {
    const repo = manager.getRepository(App);
    const entity = repo.create({ ...createAppDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createAppDto: CreateAppDto, createdBy: string) {
    const entity = this.repo.create({ ...createAppDto, createdBy });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<App>,
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

  async findOne(id: string): Promise<AppDomain> {
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

  async findOneByName(
    name: string,
    accountId: string,
  ): Promise<AppDomain | null> {
    try {
      const model = await this.repo.findOneBy({ name, accountId });
      if (model) {
        return this.mapper.toDomain(model);
      }
      return null;
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
    updateAppDto: UpdateAppDto,
    manager: EntityManager,
  ): Promise<AppDomain> {
    try {
      const repo = manager.getRepository(App);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateAppDto.name) {
        entity.updateName(updateAppDto.name);
      }
      if (updateAppDto.createdBy) {
        entity.updateOwner(updateAppDto.createdBy);
      }
      if (updateAppDto.updatedBy) {
        entity.updateUpdatedBy(updateAppDto.updatedBy);
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
    updateAppDto: UpdateAppDto,
    updatedBy: string,
  ): Promise<AppDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateAppDto.name) {
        entity.updateName(updateAppDto.name);
      }
      if (updateAppDto.description) {
        entity.updateDescription(updateAppDto.description);
      }
      if (updateAppDto.category) {
        entity.updateDescription(updateAppDto.category);
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
