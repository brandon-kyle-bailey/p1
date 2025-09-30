import { IncomingActivity as IncomingActivityDomain } from '../entities/incoming-activity.entity';
import { IncomingActivity as IncomingActivityModel } from '../entities/incoming-activity.model';
import { IncomingActivityDto } from './incoming-activity.dto';

export class IncomingActivityMapper {
  static toInterface(activity: IncomingActivityDomain): IncomingActivityDto {
    return new IncomingActivityDto(activity.props);
  }
  toInterface(activity: IncomingActivityDomain): IncomingActivityDto {
    return IncomingActivityMapper.toInterface(activity);
  }
  static toDomain(activity: IncomingActivityModel): IncomingActivityDomain {
    return new IncomingActivityDomain({
      ...activity,
    });
  }
  toDomain(activity: IncomingActivityModel): IncomingActivityDomain {
    return IncomingActivityMapper.toDomain(activity);
  }

  static toPersistence(activity: IncomingActivityDomain) {
    return {
      ...activity.props,
    };
  }
  toPersistence(activity: IncomingActivityDomain) {
    return IncomingActivityMapper.toPersistence(activity);
  }
}
