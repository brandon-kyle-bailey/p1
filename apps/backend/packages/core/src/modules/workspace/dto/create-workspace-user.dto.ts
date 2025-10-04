import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { Role } from 'src/modules/user/entities/user.entity';

export class CreateWorkspaceUserDto {
  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The id of the workspace' })
  @IsUUID()
  workspaceId: string;

  @ApiProperty({ description: 'The id of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'The role of the user' })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @IsUUID()
  @IsOptional()
  createdBy?: string;

  @IsUUID()
  @IsOptional()
  updatedBy?: string;
}
