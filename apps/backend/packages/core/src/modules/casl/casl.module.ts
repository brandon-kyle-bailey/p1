import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { PoliciesGuard } from 'src/guards/policies.guard';
import { LoggingModule } from '@app/logging';

@Module({
  imports: [LoggingModule],
  providers: [CaslAbilityFactory, PoliciesGuard],
  exports: [CaslAbilityFactory, PoliciesGuard],
})
export class CaslModule {}
