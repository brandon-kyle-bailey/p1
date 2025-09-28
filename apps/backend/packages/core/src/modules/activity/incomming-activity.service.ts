import { LoggingService } from '@app/logging';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NIL } from 'uuid';
import { CreateIncommingActivityDto } from './dto/create-incomming-activity.dto';
import { IncommingActivity } from './entities/incomming-activity.model';
import { IncommingActivityMapper } from './dto/incomming-activity.mapper';

@Injectable()
export class IncommingActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @InjectRepository(IncommingActivity)
    private readonly repo: Repository<IncommingActivity>,
    @Inject(IncommingActivityMapper)
    private readonly mapper: IncommingActivityMapper,
  ) {}
  async create(createIncommingActivityDto: CreateIncommingActivityDto) {
    const entity = this.repo.create({
      ...createIncommingActivityDto,
      createdBy: NIL,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
