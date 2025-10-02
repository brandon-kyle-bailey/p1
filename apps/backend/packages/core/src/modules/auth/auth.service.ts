import { LoggingService } from '@app/logging';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User as UserDomain } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { NIL } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(UserService) private userService: UserService,
    @Inject(JwtService) private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Partial<UserDomain> | null> {
    const user = await this.userService.findOneByEmail(username);
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    }
    return null;
  }

  async login(user: UserDomain) {
    const payload = {
      sub: user.id,
      username: user.email,
      role: user.role,
      accountId: user.accountId,
    };

    const access_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: '15m',
    });

    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d',
    });

    const hashedToken = await bcrypt.hash(refresh_token, 10);
    const dto = new UpdateUserDto();
    dto.refresh_token = hashedToken;
    await this.userService.update(user.id, dto, NIL);

    return { access_token, refresh_token };
  }

  async refresh(refreshToken: string) {
    try {
      const payload: {
        sub: string;
        username: string;
        role: string;
        accountId: string;
      } = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.userService.findOne(payload.sub);
      if (!user || !(await bcrypt.compare(refreshToken, user.refreshToken!))) {
        throw new UnauthorizedException();
      }

      const newAccessToken = this.jwtService.sign(
        {
          sub: user.id,
          username: user.email,
          role: user.role,
          accountId: user.accountId,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET')!,
          expiresIn: '15m',
        },
      );

      const newRefreshToken = this.jwtService.sign(
        {
          sub: user.id,
          username: user.email,
          role: user.role,
          accountId: user.accountId,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      );

      const newHashedToken = await bcrypt.hash(newRefreshToken, 10);
      const dto = new UpdateUserDto();
      dto.refresh_token = newHashedToken;
      await this.userService.update(user.id, dto, NIL);

      return { access_token: newAccessToken, refresh_token: newRefreshToken };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
