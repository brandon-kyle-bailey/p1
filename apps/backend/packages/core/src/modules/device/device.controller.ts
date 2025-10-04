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
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import { ControllerCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device as DeviceDomain } from './entities/device.entity';
import { LoggingService } from '@app/logging';
import { DeviceMapper } from './dto/device.mapper';
import { CommandBus } from '@nestjs/cqrs';
import { FindAllResponseDto } from '@app/dtos';
import { DeviceCreatedCommand } from './commands/device-created.command';
import { DeviceUpdatedCommand } from './commands/device-updated.command';
import { DeviceRemovedCommand } from './commands/device-removed.command';
import { User as UserDomain } from '../user/entities/user.entity';
import { Device } from './entities/device.model';

@Controller({ path: 'devices', version: '1' })
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class DeviceController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(DeviceService)
    private readonly service: DeviceService,
    @Inject(DeviceMapper)
    private readonly mapper: DeviceMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, DeviceDomain),
  )
  async create(
    @Body() createDeviceDto: CreateDeviceDto,
    @Request() req: { user: DeviceDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, DeviceDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(createDeviceDto, req.user.id);
    void this.commandBus.execute(new DeviceCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, DeviceDomain),
  )
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiQuery({
    name: 'sortField',
    required: false,
    type: String,
    example: 'startTime',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    type: String,
    example: 'asc',
  })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
    @Query('sortField') sortField: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
    @Request() req: { user: UserDomain },
  ): Promise<FindAllResponseDto<{ [key: string]: any }>> {
    if (!['asc', 'desc'].includes(sortOrder)) {
      sortOrder = 'desc';
    }
    const result = await this.service.findAll(
      skip,
      take,
      {
        accountId: req.user.accountId,
      },
      sortField ? (sortField as keyof Device) : undefined,
      sortOrder,
    );
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    return {
      ...result,
      data: result.data
        .filter((entity) => ability.can(Action.Read, entity))
        .map((entity) => this.mapper.toInterface(entity)),
    };
  }

  @Get(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, DeviceDomain),
  )
  async findOne(
    @Param('id') id: string,
    @Request() req: { user: DeviceDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Read, user)) {
      throw new UnauthorizedException();
    }
    return this.mapper.toInterface(user);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Update, DeviceDomain),
  )
  async update(
    @Param('id') id: string,
    @Body() updateDeviceDto: UpdateDeviceDto,
    @Request() req: { user: DeviceDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Update, user)) {
      throw new UnauthorizedException();
    }
    const updated = await this.service.update(id, updateDeviceDto, req.user.id);
    void this.commandBus.execute(new DeviceUpdatedCommand(updated));
    return this.mapper.toInterface(updated);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Delete, DeviceDomain),
  )
  async remove(
    @Param('id') id: string,
    @Request() req: { user: DeviceDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const user = await this.service.findOne(id);
    if (!ability.can(Action.Delete, user)) {
      throw new UnauthorizedException();
    }
    await this.service.remove(id, req.user.id);
    void this.commandBus.execute(new DeviceRemovedCommand(user));
    return user.id;
  }
}
