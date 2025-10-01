import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { AuditController } from './audit.controller';
import { LoggingModule } from '@app/logging';

@Module({
  imports: [LoggingModule],
  controllers: [AuditController],
  providers: [AuditService],
})
export class AuditModule {}
