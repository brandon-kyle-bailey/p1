import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(UserService) private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
    });
  }

  async validate(payload: {
    sub: string;
    username: string;
    role: string;
    accountId: string;
  }) {
    const foundUsser = await this.userService.findOne(payload.sub);

    if (!foundUsser) {
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
