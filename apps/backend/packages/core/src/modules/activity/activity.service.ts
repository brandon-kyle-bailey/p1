import { Inject, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { LoggingService } from '@app/logging';

@Injectable()
export class ActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
  ) {}
  create(createActivityDto: CreateActivityDto) {
    this.logger.debug(`${this.constructor.name}.${this.create.name} called`, {
      correlationId: '73657b37-0ffc-420a-941f-4dc724dab72e',
      dto: JSON.stringify(createActivityDto),
    });
    return 'This action adds a new activity';
  }

  findAll() {
    return `This action returns all activity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    this.logger.debug(`${this.constructor.name}.${this.update.name} called`, {
      correlationId: '3430a322-ceab-4d97-8144-d2e66019cbbd',
      id,
      dto: JSON.stringify(updateActivityDto),
    });
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
