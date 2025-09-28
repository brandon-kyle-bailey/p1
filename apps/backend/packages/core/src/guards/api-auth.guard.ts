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

  /**
   * Verify that the provided signature matches the expected signature.
   * @param secret - secret key
   * @param signature - signature sent in the request
   * @param timestamp - timestamp sent in the request
   * @returns true if valid, false otherwise
   */
  private _verifySignature(
    secret: string,
    signature: string,
    timestamp: string,
  ): boolean {
    // compute expected signature: HMAC-SHA256 of the timestamp
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(timestamp); // or include more of the request payload if desired
    const expectedSignature = hmac.digest('hex');

    // constant-time comparison to prevent timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature),
    );
  }
  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();

    // extract headers
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

    // validate signature (HMAC or similar)
    if (!this._verifySignature(internalSecret, signature, timestamp)) {
      throw new UnauthorizedException('Invalid signature');
    }

    // optionally attach info to request
    req.user = { apiKey };

    return true;
  }
}
