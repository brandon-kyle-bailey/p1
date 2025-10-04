import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceMapper } from './dto/device.mapper';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device as DeviceDomain } from './entities/device.entity';
import { Device } from './entities/device.model';

@Injectable()
export class DeviceService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(Device)
    private readonly repo: Repository<Device>,
    @Inject(DeviceMapper)
    private readonly mapper: DeviceMapper,
  ) {}

  async createWithManager(
    createDeviceDto: CreateDeviceDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Device);
    const entity = repo.create({ ...createDeviceDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createDeviceDto: CreateDeviceDto, createdBy: string) {
    const entity = this.repo.create({ ...createDeviceDto, createdBy });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<Device>,
    sortField: keyof Device = 'createdAt',
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
          correlationId: '7495a11a-d192-4cf5-b234-afa35140da03',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOneBy(
    where: FindOptionsWhere<Device>,
  ): Promise<DeviceDomain | null> {
    try {
      const model = await this.repo.findOneBy(where);
      if (model) {
        return this.mapper.toDomain(model);
      }
      return null;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOne.name} encountered an error`,
        {
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<DeviceDomain> {
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
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      throw new InternalServerErrorException();
    }
  }

  async updateWithManager(
    id: string,
    updateDeviceDto: UpdateDeviceDto,
    manager: EntityManager,
  ): Promise<DeviceDomain> {
    try {
      const repo = manager.getRepository(Device);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateDeviceDto.userId) {
        entity.updateUserId(updateDeviceDto.userId);
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
    updateDeviceDto: UpdateDeviceDto,
    updatedBy: string,
  ): Promise<DeviceDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateDeviceDto.userId) {
        entity.updateUserId(updateDeviceDto.userId);
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
