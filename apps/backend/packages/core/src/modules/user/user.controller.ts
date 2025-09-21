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
import { User } from './entities/user.entity';
import { FindAllResponseDto } from '@app/dtos';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import {
  Action,
  AppAbility,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserMapper } from './dto/user.mapper';

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
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, User))
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.service.create(createUserDto);
    await this.commandBus.execute(new UserCreatedCommand(result));
    return result;
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, User))
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
  ): Promise<FindAllResponseDto<User>> {
    const result = await this.service.findAll(skip, take);
    return {
      ...result,
      data: result.data.map((user) => this.mapper.toInterface(user)),
    };
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, User))
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Update, User))
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.service.update(id, updateUserDto);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Delete, User))
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
