import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { Role } from 'src/modules/user/entities/user.entity';

export class WorkspaceUserDto {
  constructor(partial: Partial<WorkspaceUserDto>) {
    Object.assign(this, partial);
  }
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

  @IsUUID()
  @IsOptional()
  deletedBy?: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @IsDateString()
  @IsOptional()
  deletedAt?: Date;
}
