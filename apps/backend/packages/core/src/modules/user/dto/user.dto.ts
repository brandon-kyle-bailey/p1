import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Role } from '../entities/user.entity';
import { Exclude } from 'class-transformer';

export class UserDto {
  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
  @ApiProperty({ description: 'The id of the account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ description: 'The email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsString()
  @MinLength(8)
  @IsStrongPassword()
  @Exclude()
  password: string;

  @ApiProperty({ description: 'The name of the user' })
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  refresh_token?: string;

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
