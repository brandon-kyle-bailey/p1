/* eslint-disable @typescript-eslint/no-unused-vars */
import { FindAllResponseDto } from '@app/dtos';
import { LoggingService } from '@app/logging';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import { LoggingCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { User as UserDomain } from '../user/entities/user.entity';
import { AccountService } from './account.service';
import { AccountCreatedCommand } from './commands/account-created.command';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import {
  Action,
  AppAbility,
} from '../casl/casl-ability.factory/casl-ability.factory';

@Controller('accounts')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(LoggingCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class AccountController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AccountService)
    private readonly service: AccountService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Account))
  async create(
    @Body() createAccountDto: CreateAccountDto,
    @Request() req: { user: UserDomain },
  ) {
    const result = await this.service.create(createAccountDto, req.user.id);
    await this.commandBus.execute(new AccountCreatedCommand(result));
    return result;
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Account))
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
    @Request() req: { user: UserDomain },
  ): Promise<FindAllResponseDto<Account>> {
    return await this.service.findAll(skip, take);
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Account))
  findOne(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Update, Account))
  update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
    @Request() req: { user: UserDomain },
  ) {
    return this.service.update(id, updateAccountDto, req.user.id);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Delete, Account))
  remove(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    return this.service.remove(id, req.user.id);
  }
}
