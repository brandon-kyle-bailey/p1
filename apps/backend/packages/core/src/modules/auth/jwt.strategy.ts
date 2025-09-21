import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '7ac54472-4dcf-4fa1-be39-8967d47d02d6',
    });
  }

  validate(payload: { sub: string; username: string; role: string }) {
    return { id: payload.sub, email: payload.username, role: payload.role };
  }
}
