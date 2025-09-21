import { User as UserDomain } from '../entities/user.entity';
import { User as UserModel } from '../entities/user.model';

export class UserMapper {
  static toInterface(user: UserDomain) {
    return {
      ...user.props,
    };
  }
  toInterface(user: UserDomain) {
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
