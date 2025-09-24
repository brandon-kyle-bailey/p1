import { Subscription as SubscriptionDomain } from '../entities/subscription.entity';
import { Subscription as SubscriptionModel } from '../entities/subscription.model';
import { SubscriptionDto } from './subscription.dto';

export class SubscriptionMapper {
  static toInterface(entity: SubscriptionDomain): SubscriptionDto {
    return new SubscriptionDto(entity.props);
  }
  toInterface(entity: SubscriptionDomain): SubscriptionDto {
    return SubscriptionMapper.toInterface(entity);
  }
  static toDomain(model: SubscriptionModel): SubscriptionDomain {
    return new SubscriptionDomain({
      ...model,
    });
  }
  toDomain(model: SubscriptionModel): SubscriptionDomain {
    return SubscriptionMapper.toDomain(model);
  }

  static toPersistence(entity: SubscriptionDomain) {
    return {
      ...entity.props,
    };
  }
  toPersistence(entity: SubscriptionDomain) {
    return SubscriptionMapper.toPersistence(entity);
  }
}
