import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { User } from '../user/entities/user.model';
import { IntegrationMapper } from './dto/integration.mapper';
import { Integration } from './entities/integration.model';
import { IntegrationCreatedHandler } from './handlers/integration-created.handler';
import { IntegrationRemovedHandler } from './handlers/integration-removed.handler';
import { IntegrationUpdatedHandler } from './handlers/integration-updated.handler';
import { IntegrationController } from './integration.controller';
import { IntegrationService } from './integration.service';

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
