import { LoggingService } from '@app/logging';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoggingCacheInterceptor extends CacheInterceptor {
  constructor(
    cacheManager: any,
    reflector: Reflector,
    private readonly logger: LoggingService,
  ) {
    super(cacheManager, reflector);
  }

  trackBy(context: ExecutionContext): string | undefined {
    const key = super.trackBy(context);
    this.logger.debug(`${this.constructor.name}.${this.trackBy.name}`, {
      correlationId: '159b8055-b731-46f3-88e8-0ede0576a2e8',
      key,
    });
    return key;
  }
}
