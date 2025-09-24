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
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import { ControllerCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { User as UserDomain } from '../user/entities/user.entity';
import { AccountService } from './account.service';
import { AccountCreatedCommand } from './commands/account-created.command';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { AccountMapper } from './dto/account.mapper';
import { AccountDto } from './dto/account.dto';
import { AccountRemovedCommand } from './commands/account-removed.command';
import { AccountUpdatedCommand } from './commands/account-updated.command';

@Controller('accounts')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class AccountController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AccountService)
    private readonly service: AccountService,
    @Inject(AccountMapper) private readonly mapper: AccountMapper,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Account))
  async create(
    @Body() createAccountDto: CreateAccountDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, Account)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(createAccountDto, req.user.id);
    void this.commandBus.execute(new AccountCreatedCommand(result));
    return this.mapper.toInterface(result);
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
  ): Promise<FindAllResponseDto<AccountDto>> {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const result = await this.service.findAll(skip, take);
    return {
      ...result,
      data: result.data
        .filter((entity) => ability.can(Action.Read, entity))
        .map((entity) => this.mapper.toInterface(entity)),
    };
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Account))
  async findOne(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Read, entity)) {
      throw new UnauthorizedException();
    }
    return this.mapper.toInterface(entity);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Update, Account))
  async update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Update, entity)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.update(id, updateAccountDto, req.user.id);
    void this.commandBus.execute(new AccountUpdatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Delete, Account))
  async remove(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Delete, entity)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.remove(id, req.user.id);
    void this.commandBus.execute(new AccountRemovedCommand(result));
    return result.id;
  }
}
