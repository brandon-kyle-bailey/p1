import { Activity as ActivityDomain } from '../entities/activity.entity';
import { Activity as ActivityModel } from '../entities/activity.model';
import { ActivityDto } from './activity.dto';

export class ActivityMapper {
  static toInterface(activity: ActivityDomain): ActivityDto {
    return new ActivityDto(activity.props);
  }
  toInterface(activity: ActivityDomain): ActivityDto {
    return ActivityMapper.toInterface(activity);
  }
  static toDomain(activity: ActivityModel): ActivityDomain {
    return new ActivityDomain({
      ...activity,
    });
  }
  toDomain(activity: ActivityModel): ActivityDomain {
    return ActivityMapper.toDomain(activity);
  }

  static toPersistence(activity: ActivityDomain) {
    return {
      ...activity.props,
    };
  }
  toPersistence(activity: ActivityDomain) {
    return ActivityMapper.toPersistence(activity);
  }
}
