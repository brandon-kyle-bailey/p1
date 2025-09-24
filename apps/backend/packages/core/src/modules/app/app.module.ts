import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoggingModule } from '@app/logging';
import { TypeOrmModule } from '@nestjs/typeorm';
import { App } from './entities/app.model';
import { CaslModule } from '../casl/casl.module';
import { AppMapper } from './dto/app.mapper';
import { AppCreatedHandler } from './handlers/app-created.handler';
import { AppRemovedHandler } from './handlers/app-removed.handler';
import { AppUpdatedHandler } from './handlers/app-updated.handler';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([App]),
    CaslModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [
    AppMapper,
    AppService,
    AppCreatedHandler,
    AppUpdatedHandler,
    AppRemovedHandler,
  ],
  exports: [AppService],
})
export class AppModule {}
