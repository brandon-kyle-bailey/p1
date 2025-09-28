import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateIncommingExtensionActivityDto {
  @ApiProperty({ description: 'The id of the activity' })
  @IsUUID()
  externalActivityId: string;

  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The id of the user' })
  @IsUUID()
  userId: string;

  @ApiProperty({ description: 'The source system of the activity' })
  @IsString()
  source: string;

  @ApiProperty({ description: 'The name of the activity' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The fingerprint of the device' })
  @IsString()
  deviceFingerprint: string;

  @ApiProperty({ description: 'The title of the activity' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The expression of the activity' })
  @IsString()
  expression: string;

  @ApiProperty({ description: 'The start_time of the activity' })
  @IsDateString()
  startTime: Date;

  @ApiProperty({ description: 'The end_time of the activity' })
  @IsDateString()
  endTime: Date;

  @IsUUID()
  @IsOptional()
  createdBy?: string;

  @IsUUID()
  @IsOptional()
  updatedBy?: string;
}
