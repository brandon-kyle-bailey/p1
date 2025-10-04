import { FanoutActivity as FanoutActivityDomain } from '../entities/fanout-activity.entity';
import { FanoutActivity as FanoutActivityModel } from '../entities/fanout-activity.model';
import { FanoutActivityDto } from './fanout-activity.dto';

export class FanoutActivityMapper {
  static toInterface(activity: FanoutActivityDomain): FanoutActivityDto {
    return new FanoutActivityDto(activity.props);
  }
  toInterface(activity: FanoutActivityDomain): FanoutActivityDto {
    return FanoutActivityMapper.toInterface(activity);
  }
  static toDomain(activity: FanoutActivityModel): FanoutActivityDomain {
    return new FanoutActivityDomain({
      ...activity,
    });
  }
  toDomain(activity: FanoutActivityModel): FanoutActivityDomain {
    return FanoutActivityMapper.toDomain(activity);
  }

  static toPersistence(activity: FanoutActivityDomain) {
    return {
      ...activity.props,
    };
  }
  toPersistence(activity: FanoutActivityDomain) {
    return FanoutActivityMapper.toPersistence(activity);
  }
}
