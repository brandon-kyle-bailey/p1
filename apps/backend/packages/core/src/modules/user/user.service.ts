import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggingService } from '@app/logging';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.model';
import { Repository } from 'typeorm';
import { UserMapper } from './dto/user.mapper';

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
  async create(createUserDto: CreateUserDto) {
    const entity = this.repo.create({ ...createUserDto });
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

  async findOne(id: string) {
    try {
      const entity = await this.repo.findOneBy({ id });
      if (entity) {
        return this.mapper.toDomain(entity);
      }
      return {};
    } catch (err: any) {
      this.logger.error(
        `${this.constructor.name}.${this.findOne.name} encountered an error`,
        {
          correlationId: '6befde88-ff55-4a59-9c7b-8b47a5980dd4',
          err: JSON.stringify(err),
        },
      );
      return {};
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user with: ${JSON.stringify(updateUserDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
