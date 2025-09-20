import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { PoliciesGuard } from 'src/guards/policies.guard';

@Module({
  providers: [CaslAbilityFactory, PoliciesGuard],
  exports: [CaslAbilityFactory, PoliciesGuard],
})
export class CaslModule {}
