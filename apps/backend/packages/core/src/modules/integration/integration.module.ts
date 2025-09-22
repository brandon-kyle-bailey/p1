import { Module } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { IntegrationController } from './integration.controller';
import { LoggingModule } from '@app/logging';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Integration } from './entities/integration.model';
import { CaslModule } from '../casl/casl.module';
import { IntegrationMapper } from './dto/integration.mapper';
import { IntegrationCreatedHandler } from './handlers/integration-created.handler';
import { IntegrationRemovedHandler } from './handlers/integration-removed.handler';
import { IntegrationUpdatedHandler } from './handlers/integration-updated.handler';
import { User } from '../user/entities/user.model';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([User, Integration]),
    CaslModule,
  ],
  controllers: [IntegrationController],
  providers: [
    IntegrationMapper,
    IntegrationService,
    IntegrationCreatedHandler,
    IntegrationUpdatedHandler,
    IntegrationRemovedHandler,
  ],
  exports: [IntegrationService],
})
export class IntegrationModule {}
