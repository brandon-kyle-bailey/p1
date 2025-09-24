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
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { User as UserDomain } from '../user/entities/user.entity';
import { SubscriptionCreatedCommand } from './commands/subscription-created.command';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionMapper } from './dto/subscription.mapper';
import { Subscription as SubscriptionDomain } from './entities/subscription.entity';
import { SubscriptionService } from './subscription.service';
import { SubscriptionUpdatedCommand } from './commands/subscription-updated.command';
import { SubscriptionRemovedCommand } from './commands/subscription-removed.command';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class SubscriptionController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(SubscriptionService)
    private readonly service: SubscriptionService,
    @Inject(SubscriptionMapper)
    private readonly mapper: SubscriptionMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, SubscriptionDomain),
  )
  async create(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, SubscriptionDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(
      createSubscriptionDto,
      req.user.id,
    );
    void this.commandBus.execute(new SubscriptionCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, SubscriptionDomain),
  )
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
    @Request() req: { user: UserDomain },
  ): Promise<FindAllResponseDto<{ [key: string]: any }>> {
    const result = await this.service.findAll(skip, take, {
      accountId: req.user.accountId,
    });
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
    ability.can(Action.Read, SubscriptionDomain),
  )
  async findOne(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Read, app)) {
      throw new UnauthorizedException();
    }
    return this.mapper.toInterface(app);
  }

  @Patch(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Update, SubscriptionDomain),
  )
  async update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Update, app)) {
      throw new UnauthorizedException();
    }
    const updated = await this.service.update(
      id,
      updateSubscriptionDto,
      req.user.id,
    );
    void this.commandBus.execute(new SubscriptionUpdatedCommand(updated));
    return this.mapper.toInterface(updated);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Delete, SubscriptionDomain),
  )
  async remove(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Delete, entity)) {
      throw new UnauthorizedException();
    }
    await this.service.remove(id, req.user.id);
    void this.commandBus.execute(new SubscriptionRemovedCommand(entity));
    return entity.id;
  }
}
