import { LoggingService } from '@app/logging';
import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountService } from '../account/account.service';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { CreateAccountDto } from '../account/dto/create-account.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { DataSource } from 'typeorm';
import { User as UserDomain } from '../user/entities/user.entity';
import { UpdateUserDto } from '../user/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(DataSource) private readonly dataSource: DataSource,
    @Inject(HttpService) private readonly httpService: HttpService,
    @Inject(UserService) private userService: UserService,
    @Inject(AccountService) private accountService: AccountService,
    @Inject(JwtService) private jwtService: JwtService,
  ) {}

  _generateToken(user: UserDomain): {
    access_token: string;
    refresh_token: string;
  } {
    const payload = { sub: user.id, username: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload);
    const refresh_token = this.jwtService.sign(payload);
    return {
      access_token,
      refresh_token,
    };
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    this.logger.debug(`${this.constructor.name}.${this.login.name}`, {
      correlationId: 'a858f469-1368-4fa2-a238-e139b491526e',
      loginDto: JSON.stringify(loginDto),
    });
    const user = await this.userService.findOneByEmail(loginDto.email);
    if (!user) {
      throw new NotFoundException();
    }
    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new BadRequestException();
    }
    const token = this._generateToken(user);
    const updateUserDto = new UpdateUserDto();
    updateUserDto.refresh_token = token.refresh_token;
    await this.userService.update(user.id, updateUserDto);
    return token;
  }
  async register(
    registerDto: RegisterDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    this.logger.debug(`${this.constructor.name}.${this.register.name}`, {
      correlationId: '4f54024e-6d09-4ca3-ab83-6bd2af6a59d1',
      loginDto: JSON.stringify(registerDto),
    });
    if (registerDto.password !== registerDto.confirmPassword) {
      throw new BadRequestException();
    }

    return this.dataSource.transaction(async (manager) => {
      const createAccountDto = new CreateAccountDto();
      createAccountDto.name = `${registerDto.email}'s Account`;
      const account = await this.accountService.createWithManager(
        createAccountDto,
        manager,
      );

      const createUserDto = new CreateUserDto();
      createUserDto.accountId = account.id;
      createUserDto.email = registerDto.email;
      createUserDto.password = bcrypt.hashSync(registerDto.password, 10);
      const user = await this.userService.createWithManager(
        createUserDto,
        manager,
      );

      // login outside persistence calls
      const token = this._generateToken(user);
      const updateUserDto = new UpdateUserDto();
      updateUserDto.refresh_token = token.refresh_token;
      await this.userService.updateWithManager(user.id, updateUserDto, manager);
      return token;
    });
  }
}
