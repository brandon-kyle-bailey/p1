import { LoggingService } from '@app/logging';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AccountService } from './account.service';
import { AccountCreatedCommand } from './commands/account-created.command';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('accounts')
@UseInterceptors(CacheInterceptor)
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
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  async create(@Body() createAccountDto: CreateAccountDto) {
    this.logger.debug('Account create controller called', {
      correlationId: '858c6084-0e8c-4d26-81a1-1f69ac5ae4e3',
      body: JSON.stringify(createAccountDto),
    });
    const result = await this.service.create(createAccountDto);
    await this.commandBus.execute(new AccountCreatedCommand(result));
    return result;
  }

  @CacheTTL(60 * 1000) // now in milliseconds (1 minute === 60000)
  @Get()
  async findAll() {
    this.logger.debug('Account findAll controller called', {
      correlationId: '1401d001-db0a-451d-aa5b-c8e4d6758f8f',
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.service.update(+id, updateAccountDto);
  }

  @Delete(':id')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
