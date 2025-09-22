import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class IntegrationDto {
  constructor(partial: Partial<IntegrationDto>) {
    Object.assign(this, partial);
  }
  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The id of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'The name of the integration' })
  @IsString()
  name: string;

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
