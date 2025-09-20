import { Module } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [LoggingService],
  exports: [LoggingService],
})
export class LoggingModule {}
