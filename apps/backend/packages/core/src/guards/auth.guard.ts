import { LoggingService } from '@app/logging';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @Inject(LoggingService) private readonly logger: LoggingService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload: { [key: string]: any } = this.jwtService.verify(token, {
        secret: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
      });
      request['user'] = payload;
      this.logger.debug(`${this.constructor.name}.${this.canActivate.name}`, {
        correlationId: 'b2224bd3-5de3-4de1-b9e4-6596bc5dc8fb',
        payload: JSON.stringify(payload),
      });
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
