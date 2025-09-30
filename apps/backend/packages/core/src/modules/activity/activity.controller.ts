import { FindAllResponseDto } from '@app/dtos';
import { LoggingService } from '@app/logging';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Query,
  Request,
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
import { User as UserDomain } from '../user/entities/user.entity';
import { ActivityService } from './activity.service';
import { ActivityMapper } from './dto/activity.mapper';
import { Activity as ActivityDomain } from './entities/activity.entity';
import { Activity } from './entities/activity.model';

@Controller({ path: 'activities', version: '1' })
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
export class ActivityController {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(ActivityService)
    private readonly service: ActivityService,
    @Inject(ActivityMapper)
    private readonly mapper: ActivityMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, ActivityDomain),
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
    @Query('sortField') sortField: string = 'startTime',
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
      sortField ? (sortField as keyof Activity) : undefined,
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
}
