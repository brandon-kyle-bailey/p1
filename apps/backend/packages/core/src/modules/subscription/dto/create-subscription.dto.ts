import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSubscriptionDto {
  @IsUUID()
  @IsOptional()
  accountId?: string;

  @ApiProperty({ description: 'The id of the app' })
  @IsUUID()
  appId: string;

  @ApiProperty({ description: 'The expression of the subscription' })
  @IsString()
  expression: string;

  @IsUUID()
  @IsOptional()
  createdBy?: string;

  @IsUUID()
  @IsOptional()
  updatedBy?: string;
}
