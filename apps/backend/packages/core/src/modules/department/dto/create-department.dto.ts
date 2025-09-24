import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDepartmentDto {
  @IsUUID()
  @IsOptional()
  accountId?: string;

  @ApiProperty({ description: 'The id of the app' })
  @IsUUID()
  appId: string;

  @ApiProperty({ description: 'The name of the workspace' })
  @IsString()
  name: string;

  @IsUUID()
  @IsOptional()
  createdBy?: string;

  @IsUUID()
  @IsOptional()
  updatedBy?: string;
}
