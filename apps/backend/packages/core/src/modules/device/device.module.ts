import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { LoggingModule } from '@app/logging';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entities/device.model';
import { CaslModule } from '../casl/casl.module';
import { DeviceMapper } from './dto/device.mapper';
import { DeviceCreatedHandler } from './handlers/device-created.handler';
import { DeviceRemovedHandler } from './handlers/device-removed.handler';
import { DeviceUpdatedHandler } from './handlers/device-updated.handler';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([Device]), CaslModule],
  controllers: [DeviceController],
  providers: [
    DeviceMapper,
    DeviceService,
    DeviceCreatedHandler,
    DeviceUpdatedHandler,
    DeviceRemovedHandler,
  ],
  exports: [DeviceService],
})
export class DeviceModule {}
