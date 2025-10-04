import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class FanoutActivityDto {
  constructor(partial: Partial<FanoutActivityDto>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The id of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'The id of the feed' })
  @IsUUID()
  feedId: string;

  @ApiProperty({ description: 'The id of the activity' })
  @IsUUID()
  activityId: string;

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
