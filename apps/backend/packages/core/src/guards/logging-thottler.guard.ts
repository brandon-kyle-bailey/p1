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
    return await super.canActivate(context);
  }
}
