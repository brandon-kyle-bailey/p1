import { LoggingService } from '@app/logging';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserMapper } from './dto/user.mapper';
import { User as UserDomain } from './entities/user.entity';
import { User } from './entities/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    @Inject(UserMapper)
    private readonly mapper: UserMapper,
  ) {}

  async createWithManager(
    createUserDto: CreateUserDto,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(User);
    const entity = repo.create({ ...createUserDto });
    const result = await repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async create(createUserDto: CreateUserDto, createdBy: string) {
    const entity = this.repo.create({ ...createUserDto, createdBy });
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
          correlationId: 'eb9e90e0-6394-484c-a431-6a79eb56468e',
          err: JSON.stringify(err),
        },
      );
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string): Promise<UserDomain> {
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

  async findOneByEmail(email: string): Promise<UserDomain | null> {
    try {
      const entity = await this.repo.findOneBy({ email });
      if (entity) {
        return this.mapper.toDomain(entity);
      }
      return null;
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOneByEmail.name} encountered an error`,
        {
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      return null;
    }
  }

  async updateWithManager(
    id: string,
    updateUserDto: UpdateUserDto,
    manager: EntityManager,
  ): Promise<UserDomain> {
    try {
      const repo = manager.getRepository(User);
      const model = await repo.findOneBy({ id });
      if (!model) {
        throw new NotFoundException();
      }
      const entity = this.mapper.toDomain(model);
      if (updateUserDto.email) {
        entity.updateEmail(updateUserDto.email);
      }
      if (updateUserDto.refresh_token) {
        entity.updateRefreshToken(updateUserDto.refresh_token);
      }
      if (updateUserDto.role) {
        entity.updateRole(updateUserDto.role);
      }
      if (updateUserDto.name) {
        entity.updateName(updateUserDto.name);
      }
      if (updateUserDto.password) {
        entity.updatePassword(updateUserDto.password);
      }
      if (updateUserDto.createdBy) {
        entity.updateOwner(updateUserDto.createdBy);
      }
      if (updateUserDto.updatedBy) {
        entity.updateUpdatedBy(updateUserDto.updatedBy);
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
    updateUserDto: UpdateUserDto,
    updatedBy: string,
  ): Promise<UserDomain> {
    try {
      const entity = await this.findOne(id);
      if (updateUserDto.email) {
        entity.updateEmail(updateUserDto.email);
      }
      if (updateUserDto.refresh_token) {
        entity.updateRefreshToken(updateUserDto.refresh_token);
      }
      if (updateUserDto.role) {
        entity.updateRole(updateUserDto.role);
      }
      if (updateUserDto.name) {
        entity.updateName(updateUserDto.name);
      }
      if (updateUserDto.password) {
        entity.updatePassword(updateUserDto.password);
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
