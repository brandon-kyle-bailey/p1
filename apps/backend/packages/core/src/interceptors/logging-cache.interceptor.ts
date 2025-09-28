import { LoggingService } from '@app/logging';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class ControllerCacheInterceptor extends CacheInterceptor {
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
    return userId ? `${userId}:${baseKey}` : baseKey;
  }
}
