import { Workspace as WorkspaceDomain } from '../entities/workspace.entity';
import { Workspace as WorkspaceModel } from '../entities/workspace.model';
import { WorkspaceDto } from './workspace.dto';

export class WorkspaceMapper {
  static toInterface(user: WorkspaceDomain): WorkspaceDto {
    return new WorkspaceDto(user.props);
  }
  toInterface(user: WorkspaceDomain): WorkspaceDto {
    return WorkspaceMapper.toInterface(user);
  }
  static toDomain(user: WorkspaceModel): WorkspaceDomain {
    return new WorkspaceDomain({
      ...user,
    });
  }
  toDomain(user: WorkspaceModel): WorkspaceDomain {
    return WorkspaceMapper.toDomain(user);
  }

  static toPersistence(user: WorkspaceDomain) {
    return {
      ...user.props,
    };
  }
  toPersistence(user: WorkspaceDomain) {
    return WorkspaceMapper.toPersistence(user);
  }
}
