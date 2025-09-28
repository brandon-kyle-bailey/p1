import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';

import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { LoggingService } from '@app/logging';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  private _verifySignature(
    secret: string,
    signature: string,
    timestamp: string,
  ): boolean {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(timestamp);
    const expectedSignature = hmac.digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature),
    );
  }
  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();

    const apiKey: string = req.headers['x-api-key'] as string;
    const signature: string = req.headers['x-signature'] as string;
    const timestamp: string = req.headers['x-timestamp'] as string;

    const internalSecret = this.configService.get<string>('API_SECRET')!;

    if (!apiKey || !signature || !timestamp) {
      throw new UnauthorizedException('Missing required headers');
    }

    const now = Date.now();
    if (Math.abs(now - Number(timestamp)) > 5 * 60 * 1000) {
      throw new UnauthorizedException('Request expired');
    }

    if (!this._verifySignature(internalSecret, signature, timestamp)) {
      throw new UnauthorizedException('Invalid signature');
    }

    req.user = { apiKey };

    return true;
  }
}
