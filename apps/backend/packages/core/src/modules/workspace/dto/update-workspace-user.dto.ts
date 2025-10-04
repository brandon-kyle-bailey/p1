import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkspaceUserDto } from './create-workspace-user.dto';

export class UpdateWorkspaceUserDto extends PartialType(
  CreateWorkspaceUserDto,
) {}
