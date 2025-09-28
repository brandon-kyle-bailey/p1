import { IncommingActivity as IncommingActivityDomain } from '../entities/incomming-activity.entity';
import { IncommingActivity as IncommingActivityModel } from '../entities/incomming-activity.model';
import { IncommingActivityDto } from './incomming-activity.dto';

export class IncommingActivityMapper {
  static toInterface(activity: IncommingActivityDomain): IncommingActivityDto {
    return new IncommingActivityDto(activity.props);
  }
  toInterface(activity: IncommingActivityDomain): IncommingActivityDto {
    return IncommingActivityMapper.toInterface(activity);
  }
  static toDomain(activity: IncommingActivityModel): IncommingActivityDomain {
    return new IncommingActivityDomain({
      ...activity,
    });
  }
  toDomain(activity: IncommingActivityModel): IncommingActivityDomain {
    return IncommingActivityMapper.toDomain(activity);
  }

  static toPersistence(activity: IncommingActivityDomain) {
    return {
      ...activity.props,
    };
  }
  toPersistence(activity: IncommingActivityDomain) {
    return IncommingActivityMapper.toPersistence(activity);
  }
}
