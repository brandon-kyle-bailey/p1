import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class CreateFanoutActivityDto {
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
}
