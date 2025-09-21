import { App as AppDomain } from '../entities/app.entity';
import { App as AppModel } from '../entities/app.model';
import { AppDto } from './app.dto';

export class AppMapper {
  static toInterface(user: AppDomain): AppDto {
    return new AppDto(user.props);
  }
  toInterface(user: AppDomain): AppDto {
    return AppMapper.toInterface(user);
  }
  static toDomain(user: AppModel): AppDomain {
    return new AppDomain({
      ...user,
    });
  }
  toDomain(user: AppModel): AppDomain {
    return AppMapper.toDomain(user);
  }

  static toPersistence(user: AppDomain) {
    return {
      ...user.props,
    };
  }
  toPersistence(user: AppDomain) {
    return AppMapper.toPersistence(user);
  }
}
