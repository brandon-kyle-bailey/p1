import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateIncommingActivityDto {
  @ApiProperty({ description: 'The id of the activity' })
  @IsUUID()
  externalActivityId: string;

  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The IP Address of the client' })
  @IsString()
  ipAddress: string;

  @ApiProperty({ description: 'The hostname of the client' })
  @IsString()
  hostname: string;

  @ApiProperty({ description: 'The mac address of the client' })
  @IsString()
  macAddress: string;

  @ApiProperty({ description: 'The operating system of the client' })
  @IsString()
  os: string;

  @ApiProperty({ description: 'The architecture of the client' })
  @IsString()
  arch: string;

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
