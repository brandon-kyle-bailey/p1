import { User as UserModel } from '../entities/user.model';
import { User as UserDomain } from '../entities/user.entity';

export class UserMapper {
  toDomain(user: UserModel): UserDomain {
    return new UserDomain({ ...user });
  }
}
