import { LoggingService } from '@app/logging';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/modules/user/entities/user.entity';

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
    const baseKey = super.trackBy(context);
    if (!baseKey) return undefined;
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const userId = request.user?.id;

    const key = userId ? `${userId}:${baseKey}` : baseKey;

    this.logger.debug(`${this.constructor.name}.${this.trackBy.name}`, {
      correlationId: '159b8055-b731-46f3-88e8-0ede0576a2e8',
      key,
    });

    return key;
  }
}
