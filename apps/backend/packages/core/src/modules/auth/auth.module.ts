import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoggingModule } from '@app/logging';
import { CaslModule } from '../casl/casl.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [LoggingModule, CaslModule, HttpModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
