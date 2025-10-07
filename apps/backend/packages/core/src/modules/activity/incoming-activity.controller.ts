import { LoggingService } from '@app/logging';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Inject,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/guards/api-auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckPolicies, PoliciesGuard } from 'src/guards/policies.guard';
import { ControllerCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import {
  Action,
  AppAbility,
  CaslAbilityFactory,
} from '../casl/casl-ability.factory/casl-ability.factory';
import { User as UserDomain } from '../user/entities/user.entity';
import { IncomingActivityCreatedCommand } from './commands/incoming-activity-created.command';
import { IncomingExtensionActivityCreatedCommand } from './commands/incoming-extension-activity-created.command';
import { CreateIncomingActivityDto } from './dto/create-incoming-activity.dto';
import { CreateIncomingExtensionActivityDto } from './dto/create-incoming-extension-activity.dto';
import { IncomingActivityMapper } from './dto/incoming-activity.mapper';
import { IncomingExtensionActivity as IncomingExtensionActivityDomain } from './entities/incoming-extension-activity.entity';
import { IncomingActivityService } from './incoming-activity.service';

@Controller({ path: 'incoming-activities', version: '1' })
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
export class IncomingActivityController {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(IncomingActivityService)
    private readonly service: IncomingActivityService,
    @Inject(IncomingActivityMapper)
    private readonly mapper: IncomingActivityMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post('agent')
  @UseGuards(ApiKeyGuard)
  @ApiHeader({
    name: 'x-api-key',
    description: 'Client API key',
    required: true,
  })
  @ApiHeader({
    name: 'x-signature',
    description: 'Request signature',
    required: true,
  })
  @ApiHeader({
    name: 'x-timestamp',
    description: 'Request timestamp (milliseconds since epoch)',
    required: true,
  })
  async agent(@Body() dto: CreateIncomingActivityDto) {
    const result = await this.service.create(dto);
    if (!result) {
      return;
    }
    void this.commandBus.execute(new IncomingActivityCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Post('extension')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, IncomingExtensionActivityDomain),
  )
  async extension(
    @Body() dto: CreateIncomingExtensionActivityDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, UserDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(dto);
    if (!result) {
      return;
    }
    void this.commandBus.execute(
      new IncomingExtensionActivityCreatedCommand(
        result as unknown as IncomingExtensionActivityDomain,
      ),
    );
    return this.mapper.toInterface(result);
  }
}
