import { User as UserDomain } from '../entities/user.entity';
import { User as UserModel } from '../entities/user.model';
import { UserDto } from './user.dto';

export class UserMapper {
  static toInterface(user: UserDomain): UserDto {
    return new UserDto(user.props);
  }
  toInterface(user: UserDomain): UserDto {
    return UserMapper.toInterface(user);
  }
  static toDomain(user: UserModel): UserDomain {
    return new UserDomain({
      ...user,
    });
  }
  toDomain(user: UserModel): UserDomain {
    return UserMapper.toDomain(user);
  }

  static toPersistence(user: UserDomain) {
    return {
      ...user.props,
    };
  }
  toPersistence(user: UserDomain) {
    return UserMapper.toPersistence(user);
  }
}
