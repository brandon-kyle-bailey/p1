import { User as UserDomain } from '../entities/user.entity';
import { User as UserModel } from '../entities/user.model';

export class UserMapper {
  static toDomain(user: UserModel): UserDomain {
    return new UserDomain({
      ...user,
    });
  }
  toDomain(user: UserModel): UserDomain {
    return UserMapper.toDomain(user);
  }
}
