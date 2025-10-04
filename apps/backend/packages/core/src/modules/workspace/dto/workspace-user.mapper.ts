import { WorkspaceUser as WorkspaceUserDomain } from '../entities/workspace-user.entity';
import { WorkspaceUser as WorkspaceUserModel } from '../entities/workspace-user.model';
import { WorkspaceUserDto } from './workspace-user.dto';

export class WorkspaceUserMapper {
  static toInterface(user: WorkspaceUserDomain): WorkspaceUserDto {
    return new WorkspaceUserDto(user.props);
  }
  toInterface(user: WorkspaceUserDomain): WorkspaceUserDto {
    return WorkspaceUserMapper.toInterface(user);
  }
  static toDomain(user: WorkspaceUserModel): WorkspaceUserDomain {
    return new WorkspaceUserDomain({
      ...user,
    });
  }
  toDomain(user: WorkspaceUserModel): WorkspaceUserDomain {
    return WorkspaceUserMapper.toDomain(user);
  }

  static toPersistence(user: WorkspaceUserDomain) {
    return {
      ...user.props,
    };
  }
  toPersistence(user: WorkspaceUserDomain) {
    return WorkspaceUserMapper.toPersistence(user);
  }
}
