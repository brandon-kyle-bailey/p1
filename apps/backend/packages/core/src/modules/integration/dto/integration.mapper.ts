import { Integration as IntegrationDomain } from '../entities/integration.entity';
import { Integration as IntegrationModel } from '../entities/integration.model';
import { IntegrationDto } from './integration.dto';

export class IntegrationMapper {
  static toInterface(user: IntegrationDomain): IntegrationDto {
    return new IntegrationDto(user.props);
  }
  toInterface(user: IntegrationDomain): IntegrationDto {
    return IntegrationMapper.toInterface(user);
  }
  static toDomain(user: IntegrationModel): IntegrationDomain {
    return new IntegrationDomain({
      ...user,
    });
  }
  toDomain(user: IntegrationModel): IntegrationDomain {
    return IntegrationMapper.toDomain(user);
  }

  static toPersistence(user: IntegrationDomain) {
    return {
      ...user.props,
    };
  }
  toPersistence(user: IntegrationDomain) {
    return IntegrationMapper.toPersistence(user);
  }
}
