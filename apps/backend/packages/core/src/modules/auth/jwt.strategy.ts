import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { LoggingService } from '@app/logging';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(UserService) private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
    });
  }

  async validate(payload: {
    sub: string;
    username: string;
    role: string;
    accountId: string;
  }) {
    const foundUser = await this.userService.findOne(payload.sub);

    if (!foundUser) {
      throw new UnauthorizedException();
    }
    return {
      id: payload.sub,
      email: payload.username,
      role: payload.role,
      accountId: payload.accountId,
    };
  }
}
