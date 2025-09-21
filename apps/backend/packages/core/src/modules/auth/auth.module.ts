import { LoggingModule } from '@app/logging';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccountModule } from '../account/account.module';
import { CaslModule } from '../casl/casl.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    LoggingModule,
    CaslModule,
    HttpModule,
    AccountModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
