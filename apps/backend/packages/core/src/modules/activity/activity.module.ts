import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyGuard } from 'src/guards/api-auth.guard';
import { ActivityService } from './activity.service';
import { ActivityMapper } from './dto/activity.mapper';
import { IncommingActivityMapper } from './dto/incomming-activity.mapper';
import { Activity } from './entities/activity.model';
import { IncommingActivity } from './entities/incomming-activity.model';
import { ActivityCreatedHandler } from './handlers/activity-created.handler';
import { IncommingActivityCreatedHandler } from './handlers/incomming-activity-created.handler';
import { IncommingActivityController } from './incomming-activity.controller';
import { IncommingActivityService } from './incomming-activity.service';
import { UserModule } from '../user/user.module';
import { AppModule } from '../app/app.module';
import { DeviceModule } from '../device/device.module';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([Activity, IncommingActivity]),
    UserModule,
    AppModule,
    DeviceModule,
  ],
  controllers: [IncommingActivityController],
  providers: [
    ApiKeyGuard,
    ActivityMapper,
    IncommingActivityMapper,
    ActivityService,
    IncommingActivityService,
    ActivityCreatedHandler,
    IncommingActivityCreatedHandler,
  ],
  exports: [ActivityService],
})
export class ActivityModule {}
