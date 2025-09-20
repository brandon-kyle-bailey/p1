import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoggingService } from '@app/logging';
import { RegisterDto } from './dto/register.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(HttpService) private readonly httpService: HttpService,
  ) {}
  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    this.logger.debug(`${this.constructor.name}.${this.login.name}`, {
      correlationId: 'a858f469-1368-4fa2-a238-e139b491526e',
      loginDto: JSON.stringify(loginDto),
    });
    await new Promise((res) => res(true));
    return { access_token: '', refresh_token: '' };
  }
  async register(
    registerDto: RegisterDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    this.logger.debug(`${this.constructor.name}.${this.register.name}`, {
      correlationId: '4f54024e-6d09-4ca3-ab83-6bd2af6a59d1',
      loginDto: JSON.stringify(registerDto),
    });
    await new Promise((res) => res(true));
    return { access_token: '', refresh_token: '' };
  }
}
