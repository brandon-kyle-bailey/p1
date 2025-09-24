import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { Category } from '../entities/app.entity';

export class CreateAppDto {
  @ApiProperty({ description: 'The name of the app' })
  @IsString()
  name: string;

  @IsUUID()
  @IsOptional()
  accountId?: string;

  @ApiProperty({ description: 'The description of the app' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'The category of the app' })
  @IsEnum(Category)
  @IsOptional()
  category?: Category;

  @IsUUID()
  @IsOptional()
  createdBy?: string;

  @IsUUID()
  @IsOptional()
  updatedBy?: string;
}
