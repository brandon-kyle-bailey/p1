import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({ description: 'The name of the account' })
  @IsString()
  name: string;
}
