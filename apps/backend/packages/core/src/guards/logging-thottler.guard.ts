import { ExecutionContext, Injectable } from '@nestjs/common';
import {
  ThrottlerGuard,
  type ThrottlerModuleOptions,
  ThrottlerStorage,
} from '@nestjs/throttler';
import { Reflector } from '@nestjs/core';
import { LoggingService } from '@app/logging';

@Injectable()
export class LoggingThrottlerGuard extends ThrottlerGuard {
  constructor(
    options: ThrottlerModuleOptions,
    storageService: ThrottlerStorage,
    reflector: Reflector,
    private readonly logger: LoggingService,
  ) {
    super(options, storageService, reflector);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const allowed = await super.canActivate(context);
    this.logger.debug(`${this.constructor.name}.${this.canActivate.name}`, {
      correlationId: 'a4b5ece4-dcae-43f7-838b-e75b241b9e2e',
      allowed,
    });
    return allowed;
  }
}
