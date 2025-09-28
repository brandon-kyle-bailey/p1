import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { LoggingModule } from '@app/logging';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.model';
import { ActivityMapper } from './dto/activity.mapper';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([Activity])],
  controllers: [ActivityController],
  providers: [ActivityMapper, ActivityService],
  exports: [ActivityService],
})
export class ActivityModule {}
