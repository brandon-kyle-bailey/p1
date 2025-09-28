import { LoggingService } from '@app/logging';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Inject,
  Param,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiHeader } from '@nestjs/swagger';
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
import { IncommingActivityCreatedCommand } from './commands/incomming-activity-created.command';
import { IncommingExtensionActivityCreatedCommand } from './commands/incomming-extension-activity-created.command';
import { CreateIncommingActivityDto } from './dto/create-incomming-activity.dto';
import { CreateIncommingExtensionActivityDto } from './dto/create-incomming-extension-activity.dto';
import { IncommingActivityMapper } from './dto/incomming-activity.mapper';
import { IncommingExtensionActivity as IncommingExtensionActivityDomain } from './entities/incomming-extension-activity.entity';
import { IncommingActivityService } from './incomming-activity.service';

@Controller({ path: 'activities', version: '1' })
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
export class IncommingActivityController {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(IncommingActivityService)
    private readonly service: IncommingActivityService,
    @Inject(IncommingActivityMapper)
    private readonly mapper: IncommingActivityMapper,
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
  async agent(@Body() dto: CreateIncommingActivityDto) {
    const result = await this.service.create(dto);
    void this.commandBus.execute(new IncommingActivityCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Post('extension')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, IncommingExtensionActivityDomain),
  )
  async extension(
    @Body() dto: CreateIncommingExtensionActivityDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, UserDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(dto);
    void this.commandBus.execute(
      new IncommingExtensionActivityCreatedCommand(
        result as unknown as IncommingExtensionActivityDomain,
      ),
    );
    return this.mapper.toInterface(result);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
