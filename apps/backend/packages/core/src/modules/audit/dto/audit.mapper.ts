import { Audit as AuditDomain } from '../entities/audit.entity';
import { Audit as AuditModel } from '../entities/audit.model';
import { AuditDto } from './audit.dto';

export class AuditMapper {
  static toInterface(activity: AuditDomain): AuditDto {
    return new AuditDto(activity.props);
  }
  toInterface(activity: AuditDomain): AuditDto {
    return AuditMapper.toInterface(activity);
  }
  static toDomain(activity: AuditModel): AuditDomain {
    return new AuditDomain({
      ...activity,
    });
  }
  toDomain(activity: AuditModel): AuditDomain {
    return AuditMapper.toDomain(activity);
  }

  static toPersistence(activity: AuditDomain) {
    return {
      ...activity.props,
    };
  }
  toPersistence(activity: AuditDomain) {
    return AuditMapper.toPersistence(activity);
  }
}
