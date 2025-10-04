import { PartialType } from '@nestjs/mapped-types';
import { CreateFanoutActivityDto } from './create-fanout-activity.dto';

export class UpdateFanoutActivityDto extends PartialType(
  CreateFanoutActivityDto,
) {}
