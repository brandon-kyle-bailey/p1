import { LoggingService } from '@app/logging';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NIL } from 'uuid';
import { CreateIncomingActivityDto } from './dto/create-incoming-activity.dto';
import { IncomingActivity } from './entities/incoming-activity.model';
import { IncomingActivityMapper } from './dto/incoming-activity.mapper';
import { CreateIncomingExtensionActivityDto } from './dto/create-incoming-extension-activity.dto';

@Injectable()
export class IncomingActivityService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @InjectRepository(IncomingActivity)
    private readonly repo: Repository<IncomingActivity>,
    @Inject(IncomingActivityMapper)
    private readonly mapper: IncomingActivityMapper,
  ) {}
  async create(
    dto: CreateIncomingActivityDto | CreateIncomingExtensionActivityDto,
  ) {
    const entity = this.repo.create({
      ...dto,
      createdBy: NIL,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
