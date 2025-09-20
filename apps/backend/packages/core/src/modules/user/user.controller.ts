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
import { LoggingCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { UserCreatedCommand } from './commands/user-created.command';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { FindAllResponseDto } from '@app/dtos';

@Controller('users')
@UseInterceptors(LoggingCacheInterceptor)
export class UserController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(UserService)
    private readonly service: UserService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.service.create(createUserDto);
    await this.commandBus.execute(new UserCreatedCommand(result));
    return result;
  }

  @Get()
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
  ): Promise<FindAllResponseDto<User>> {
    return await this.service.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.service.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
