import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class ActivityDto {
  constructor(partial: Partial<ActivityDto>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'The id of the incomming activity id' })
  @IsUUID()
  incommingActivityId: string;

  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The id of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'The id of the app' })
  @IsUUID()
  appId: string;

  @ApiProperty({ description: 'The source system of the activity' })
  @IsString()
  source: string;

  @ApiProperty({ description: 'The description of the activity' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'The start_time of the activity' })
  @IsDateString()
  startTime: Date;

  @ApiProperty({ description: 'The end_time of the activity' })
  @IsDateString()
  endTime: Date;

  @ApiProperty({ description: 'The duration of the activity' })
  @IsNumber()
  duration: number;

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
