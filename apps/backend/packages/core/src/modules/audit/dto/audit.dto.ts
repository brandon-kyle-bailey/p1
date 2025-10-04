import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, IsUUID } from 'class-validator';

export class AuditDto {
  constructor(partial: Partial<AuditDto>) {
    Object.assign(this, partial);
  }
  @ApiProperty({ description: 'The correlationId of the audit log' })
  @IsUUID()
  correlationId: string;

  @ApiProperty({ description: 'The message of the log' })
  @IsString()
  message: string;

  @ApiProperty({ description: 'The start_time of the activity' })
  @IsDateString()
  timestamp: Date;
}
