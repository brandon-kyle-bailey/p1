import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMapper } from './dto/user.mapper';
import { User } from './entities/user.model';
import { UserCreatedHandler } from './handlers/user-created.handler';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserUpdatedHandler } from './handlers/user-updated.handler';
import { UserRemovedHandler } from './handlers/user-removed.handler';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserMapper,
    UserService,
    UserCreatedHandler,
    UserUpdatedHandler,
    UserRemovedHandler,
  ],
})
export class UserModule {}
