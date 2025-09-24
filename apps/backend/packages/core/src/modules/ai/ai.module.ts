import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { AiService } from './ai.service';

@Module({
  imports: [LoggingModule],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}
