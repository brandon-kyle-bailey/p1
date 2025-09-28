import { App as AppDomain } from '../entities/app.entity';
import { App as AppModel } from '../entities/app.model';
import { AppDto } from './app.dto';

export class AppMapper {
  static toInterface(app: AppDomain): AppDto {
    return new AppDto(app.props);
  }
  toInterface(app: AppDomain): AppDto {
    return AppMapper.toInterface(app);
  }
  static toDomain(app: AppModel): AppDomain {
    return new AppDomain({
      ...app,
    });
  }
  toDomain(app: AppModel): AppDomain {
    return AppMapper.toDomain(app);
  }

  static toPersistence(app: AppDomain) {
    return {
      ...app.props,
    };
  }
  toPersistence(app: AppDomain) {
    return AppMapper.toPersistence(app);
  }
}
