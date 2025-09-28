import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { Request } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Role, User } from '../user/entities/user.entity';
import { LoggingService } from '@app/logging';
import { DataSource } from 'typeorm';
import { UserService } from '../user/user.service';
import { AccountService } from '../account/account.service';
import { RegisterDto } from './dto/register.dto';
import { CreateAccountDto } from '../account/dto/create-account.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateAccountDto } from '../account/dto/update-account.dto';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(UserService) private readonly userService: UserService,
    @Inject(AccountService) private readonly accountService: AccountService,
    @Inject(DataSource) private readonly dataSource: DataSource,
    @Inject(AuthService) private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Request() req: { user: User }, @Body() body: LoginDto) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    if (body.password !== body.confirmPassword) {
      throw new BadRequestException();
    }
    const user = await this.dataSource.transaction(async (manager) => {
      const createAccountDto = new CreateAccountDto();
      createAccountDto.name = `${body.username}'s Account`;
      const account = await this.accountService.createWithManager(
        createAccountDto,
        manager,
      );

      const createUserDto = new CreateUserDto();
      createUserDto.accountId = account.id;
      createUserDto.name = body.name;
      createUserDto.email = body.username;
      createUserDto.password = bcrypt.hashSync(body.password, 10);
      createUserDto.role = Role.Owner;
      const user = await this.userService.createWithManager(
        createUserDto,
        manager,
      );

      const updateAccountDto = new UpdateAccountDto();
      updateAccountDto.createdBy = user.id;
      updateAccountDto.updatedBy = user.id;
      await this.accountService.updateWithManager(
        account.id,
        updateAccountDto,
        manager,
      );
      return user;
    });
    return this.authService.login(user);
  }
}
