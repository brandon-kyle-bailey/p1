import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMapper } from './dto/user.mapper';
import { User } from './entities/user.model';
import { UserCreatedHandler } from './handlers/user-created.handler';
import { UserRemovedHandler } from './handlers/user-removed.handler';
import { UserUpdatedHandler } from './handlers/user-updated.handler';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CaslModule } from '../casl/casl.module';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([User]), CaslModule],
  controllers: [UserController],
  providers: [
    UserMapper,
    UserService,
    UserCreatedHandler,
    UserUpdatedHandler,
    UserRemovedHandler,
  ],
  exports: [UserService],
})
export class UserModule {}
