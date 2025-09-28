import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateActivityDto {
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
}
