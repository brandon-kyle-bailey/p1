import { User } from './entities/user.entity';
import { UserModel } from './user.model';

export class UserMapper {
  toDomain(user: UserModel): User {
    return new User({ ...user });
  }
}
