import { LoggingModule } from '@app/logging';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyGuard } from 'src/guards/api-auth.guard';
import { ActivityService } from './activity.service';
import { ActivityMapper } from './dto/activity.mapper';
import { IncomingActivityMapper } from './dto/incoming-activity.mapper';
import { Activity } from './entities/activity.model';
import { IncomingActivity } from './entities/incoming-activity.model';
import { ActivityCreatedHandler } from './handlers/activity-created.handler';
import { IncomingActivityCreatedHandler } from './handlers/incoming-activity-created.handler';
import { IncomingActivityController } from './incoming-activity.controller';
import { IncomingActivityService } from './incoming-activity.service';
import { UserModule } from '../user/user.module';
import { AppModule } from '../app/app.module';
import { DeviceModule } from '../device/device.module';
import { CaslModule } from '../casl/casl.module';
import { IncomingExtensionActivityCreatedHandler } from './handlers/incoming-extension-activity-created.handler';
import { AuthModule } from '../auth/auth.module';
import { ActivityController } from './activity.controller';
import { FanoutActivity } from './entities/fanout-activity.model';
import { FanoutActivityMapper } from './dto/fanout-activity.mapper';
import { FanoutActivityService } from './fanout-activity.service';
import { WorkspaceModule } from '../workspace/workspace.module';
import { ActivityUpdatedHandler } from './handlers/activity-updated.handler';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([Activity, IncomingActivity, FanoutActivity]),
    CaslModule,
    UserModule,
    AppModule,
    // forwardRef resolves circular dependency
    forwardRef(() => DeviceModule),
    AuthModule,
    WorkspaceModule,
  ],
  controllers: [IncomingActivityController, ActivityController],
  providers: [
    ApiKeyGuard,
    ActivityMapper,
    FanoutActivityMapper,
    IncomingActivityMapper,
    ActivityService,
    FanoutActivityService,
    IncomingActivityService,
    ActivityCreatedHandler,
    ActivityUpdatedHandler,
    IncomingActivityCreatedHandler,
    IncomingExtensionActivityCreatedHandler,
  ],
  exports: [ActivityService, IncomingActivityService, FanoutActivityService],
})
export class ActivityModule {}
