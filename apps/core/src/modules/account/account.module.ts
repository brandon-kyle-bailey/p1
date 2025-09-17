import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModel } from './account.model';
import { AccountMapper } from './account.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([AccountModel])],
  controllers: [AccountController],
  providers: [AccountMapper, AccountService],
  exports: [AccountMapper, AccountService],
})
export class AccountModule {}
