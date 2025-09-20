import { FindAllResponseDto } from '@app/dtos';
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
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { LoggingCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { AccountService } from './account.service';
import { AccountCreatedCommand } from './commands/account-created.command';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Controller('accounts')
@UseInterceptors(LoggingCacheInterceptor)
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
  async create(@Body() createAccountDto: CreateAccountDto) {
    const result = await this.service.create(createAccountDto);
    await this.commandBus.execute(new AccountCreatedCommand(result));
    return result;
  }

  @Get()
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
  ): Promise<FindAllResponseDto<Account>> {
    return await this.service.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.service.update(id, updateAccountDto);
  }

  @Delete(':id')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
