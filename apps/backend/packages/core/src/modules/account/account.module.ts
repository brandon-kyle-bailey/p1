import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountMapper } from './dto/account.mapper';
import { Account } from './entities/account.model';
import { AccountCreatedHandler } from './handlers/account-created.handler';
import { AccountRemovedHandler } from './handlers/account-removed.handler';
import { AccountUpdatedHandler } from './handlers/account-updated.handler';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    AccountMapper,
    AccountService,
    AccountCreatedHandler,
    AccountUpdatedHandler,
    AccountRemovedHandler,
  ],
})
export class AccountModule {}
