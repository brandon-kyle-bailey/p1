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
import { CreateWorkspaceUserDto } from './dto/create-workspace-user.dto';
import { UpdateWorkspaceUserDto } from './dto/update-workspace-user.dto';
import { WorkspaceUserMapper } from './dto/workspace-user.mapper';
import { WorkspaceUser as WorkspaceUserDomain } from './entities/workspace-user.entity';
import { WorkspaceUser } from './entities/workspace-user.model';
import { WorkspaceUserService } from './workspace-user.service';

@Controller({ path: 'workspace-users', version: '1' })
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class WorkspaceUserController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(WorkspaceUserService)
    private readonly service: WorkspaceUserService,
    @Inject(WorkspaceUserMapper)
    private readonly mapper: WorkspaceUserMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, WorkspaceUserDomain),
  )
  async create(
    @Body() createWorkspaceUserDto: CreateWorkspaceUserDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, WorkspaceUserDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(
      createWorkspaceUserDto,
      req.user.id,
    );
    return this.mapper.toInterface(result);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, WorkspaceUserDomain),
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
      sortField ? (sortField as keyof WorkspaceUser) : undefined,
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
    ability.can(Action.Read, WorkspaceUserDomain),
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
    ability.can(Action.Update, WorkspaceUserDomain),
  )
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceUserDto: UpdateWorkspaceUserDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Update, app)) {
      throw new UnauthorizedException();
    }
    const updated = await this.service.update(
      id,
      updateWorkspaceUserDto,
      req.user.id,
    );
    return this.mapper.toInterface(updated);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Delete, WorkspaceUserDomain),
  )
  async remove(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Delete, entity)) {
      throw new UnauthorizedException();
    }
    await this.service.remove(id, req.user.id);
    return entity.id;
  }
}
