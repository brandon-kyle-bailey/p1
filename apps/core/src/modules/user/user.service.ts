import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserDomain, UserRole } from './entities/user.entity';
import { UserMapper } from './user.mapper';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
    private readonly userMapper: UserMapper,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDomain> {
    const user = this.userRepository.create({
      ...createUserDto,
      role: createUserDto.role ?? UserRole.USER,
    });
    return this.userMapper.toDomain(await this.userRepository.save(user));
  }

  async findAll(): Promise<UserDomain[]> {
    const users = await this.userRepository.find({
      where: { deletedAt: undefined },
    });
    return users.map((user) => this.userMapper.toDomain(user));
  }

  async findOne(id: string): Promise<UserDomain> {
    const user = await this.userRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return this.userMapper.toDomain(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDomain> {
    const user = await this.userRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!user) throw new NotFoundException(`User #${id} not found`);

    Object.assign(user, updateUserDto);
    return this.userMapper.toDomain(await this.userRepository.save(user));
  }

  async softDelete(id: string, deletedBy?: string): Promise<UserDomain> {
    const userRaw = await this.userRepository.findOne({
      where: { id, deletedAt: undefined },
    });
    if (!userRaw) throw new NotFoundException(`User #${id} not found`);
    const user = this.userMapper.toDomain(userRaw);

    user.softDelete(deletedBy);

    return await this.userRepository.save(user);
  }
}
