import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { User } from '../user/entities/user.model';
import { SubscriptionMapper } from './dto/subscription.mapper';
import { Subscription } from './entities/subscription.model';
import { SubscriptionCreatedHandler } from './handlers/subscription-created.handler';
import { SubscriptionRemovedHandler } from './handlers/subscription-removed.handler';
import { SubscriptionUpdatedHandler } from './handlers/subscription-updated.handler';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([User, Subscription]),
    CaslModule,
  ],
  controllers: [SubscriptionController],
  providers: [
    SubscriptionMapper,
    SubscriptionService,
    SubscriptionCreatedHandler,
    SubscriptionUpdatedHandler,
    SubscriptionRemovedHandler,
  ],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
