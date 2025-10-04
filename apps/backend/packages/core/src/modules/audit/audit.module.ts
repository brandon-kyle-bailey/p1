import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuditController } from './audit.controller';
import { AuditService } from './audit.service';
import { Audit } from './entities/audit.model';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Audit])],
  controllers: [AuditController],
  providers: [AuditService],
})
export class AuditModule {}
