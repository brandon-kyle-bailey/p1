import { LoggingService } from '@app/logging';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { LoggingCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { UserCreatedCommand } from './commands/user-created.command';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { User as UserDomain } from './entities/user.entity';
import { FindAllResponseDto } from '@app/dtos';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserMapper } from './dto/user.mapper';
import { User } from '../../decorators/user.decorator';

@Controller('users')
@UseGuards(AuthGuard, PoliciesGuard)
@UseInterceptors(LoggingCacheInterceptor)
@ApiBearerAuth()
export class UserController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(UserService)
    private readonly service: UserService,
    @Inject(UserMapper)
    private readonly mapper: UserMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, UserDomain),
  )
  async create(
    @Body() createUserDto: CreateUserDto,
    @User('sub') userId: string,
  ) {
    const result = await this.service.create(createUserDto, userId);
    await this.commandBus.execute(new UserCreatedCommand(result));
    return result;
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, UserDomain))
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
  ): Promise<FindAllResponseDto<{ [key: string]: any }>> {
    const result = await this.service.findAll(skip, take);
    return {
      ...result,
      data: result.data.map((user) => this.mapper.toInterface(user)),
    };
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, UserDomain))
  async findOne(@Param('id') id: string, @User('sub') userId: string) {
    const ability = await this.caslAbilityFactory.createForUser(userId);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Read, user)) {
      throw new UnauthorizedException();
    }
    return user;
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Update, UserDomain),
  )
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @User('sub') userId: string,
  ) {
    const ability = await this.caslAbilityFactory.createForUser(userId);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Update, user)) {
      this.logger.debug('failing because we got here....');
      throw new UnauthorizedException();
    }
    return this.service.update(id, updateUserDto, userId);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Delete, UserDomain),
  )
  async remove(@Param('id') id: string, @User('sub') userId: string) {
    const ability = await this.caslAbilityFactory.createForUser(userId);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Update, user)) {
      throw new UnauthorizedException();
    }
    return this.service.remove(id, userId);
  }
}
