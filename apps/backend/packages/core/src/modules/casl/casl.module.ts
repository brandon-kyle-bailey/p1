import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { PoliciesGuard } from 'src/guards/policies.guard';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.model';
import { UserService } from '../user/user.service';
import { UserMapper } from '../user/dto/user.mapper';

@Module({
  imports: [LoggingModule, TypeOrmModule.forFeature([User])],
  providers: [CaslAbilityFactory, PoliciesGuard, UserService, UserMapper],
  exports: [CaslAbilityFactory, PoliciesGuard],
})
export class CaslModule {}
