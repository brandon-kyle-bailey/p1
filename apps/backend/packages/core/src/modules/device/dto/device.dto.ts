import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class DeviceDto {
  constructor(partial: Partial<DeviceDto>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ description: 'The ID of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The IP address of the device' })
  @IsString()
  ipAddress: string;

  @ApiProperty({ description: 'The hostuser of the device' })
  @IsString()
  hostuser: string;

  @ApiProperty({ description: 'The hostname of the device' })
  @IsString()
  hostname: string;

  @ApiProperty({ description: 'The mac address of the device' })
  @IsString()
  macAddress: string;

  @ApiProperty({ description: 'The os of the device' })
  @IsString()
  os: string;

  @ApiProperty({ description: 'The arch of the device' })
  @IsString()
  arch: string;

  @ApiProperty({ description: 'The fingerprint of the device' })
  @IsString()
  fingerprint: string;

  @ApiProperty({ description: 'The ID address of the user' })
  @IsUUID()
  @IsOptional()
  userId?: string;

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
