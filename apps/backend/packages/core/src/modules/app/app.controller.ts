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
import { LoggingCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { AppCreatedCommand } from './commands/app-created.command';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { AppMapper } from './dto/app.mapper';
import { App as AppDomain } from './entities/app.entity';
import { AppService } from './app.service';

@Controller('apps')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(LoggingCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class AppController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AppService)
    private readonly service: AppService,
    @Inject(AppMapper)
    private readonly mapper: AppMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, AppDomain))
  async create(
    @Body() createAppDto: CreateAppDto,
    @Request() req: { app: AppDomain },
  ) {
    const result = await this.service.create(createAppDto, req.app.id);
    await this.commandBus.execute(new AppCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, AppDomain))
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
      data: result.data.map((app) => this.mapper.toInterface(app)),
    };
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, AppDomain))
  async findOne(@Param('id') id: string, @Request() req: { app: AppDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.app.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Read, app)) {
      throw new UnauthorizedException();
    }
    return this.mapper.toInterface(app);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Update, AppDomain))
  async update(
    @Param('id') id: string,
    @Body() updateAppDto: UpdateAppDto,
    @Request() req: { app: AppDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.app.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Update, app)) {
      this.logger.debug('failing because we got here....');
      throw new UnauthorizedException();
    }
    const updated = await this.service.update(id, updateAppDto, req.app.id);
    return this.mapper.toInterface(updated);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Delete, AppDomain))
  async remove(@Param('id') id: string, @Request() req: { app: AppDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.app.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Update, app)) {
      throw new UnauthorizedException();
    }
    await this.service.remove(id, req.app.id);
    return app.id;
  }
}
