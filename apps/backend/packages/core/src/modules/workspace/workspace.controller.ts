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
import { WorkspaceCreatedCommand } from './commands/workspace-created.command';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { WorkspaceMapper } from './dto/workspace.mapper';
import { Workspace as WorkspaceDomain } from './entities/workspace.entity';
import { WorkspaceService } from './workspace.service';
import { WorkspaceRemovedCommand } from './commands/workspace-removed.command';
import { WorkspaceUpdatedCommand } from './commands/workspace-updated.command';

@Controller({ path: 'workspaces', version: '1' })
@UseGuards(JwtAuthGuard, PoliciesGuard)
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
export class WorkspaceController {
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(WorkspaceService)
    private readonly service: WorkspaceService,
    @Inject(WorkspaceMapper)
    private readonly mapper: WorkspaceMapper,
    @Inject(CaslAbilityFactory)
    private readonly caslAbilityFactory: CaslAbilityFactory,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Create, WorkspaceDomain),
  )
  async create(
    @Body() createWorkspaceDto: CreateWorkspaceDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    if (!ability.can(Action.Create, WorkspaceDomain)) {
      throw new UnauthorizedException();
    }
    const result = await this.service.create(createWorkspaceDto, req.user.id);
    void this.commandBus.execute(new WorkspaceCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Get()
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Read, WorkspaceDomain),
  )
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiOkResponse({ type: FindAllResponseDto })
  async findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 100,
    @Request() req: { user: UserDomain },
  ): Promise<FindAllResponseDto<{ [key: string]: any }>> {
    const result = await this.service.findAll(skip, take);
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
    ability.can(Action.Read, WorkspaceDomain),
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
    ability.can(Action.Update, WorkspaceDomain),
  )
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateWorkspaceDto,
    @Request() req: { user: UserDomain },
  ) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const app = await this.service.findOne(id);
    if (!ability.can(Action.Update, app)) {
      throw new UnauthorizedException();
    }
    const updated = await this.service.update(
      id,
      updateWorkspaceDto,
      req.user.id,
    );
    void this.commandBus.execute(new WorkspaceUpdatedCommand(updated));
    return this.mapper.toInterface(updated);
  }

  @Delete(':id')
  @CheckPolicies((ability: AppAbility) =>
    ability.can(Action.Delete, WorkspaceDomain),
  )
  async remove(@Param('id') id: string, @Request() req: { user: UserDomain }) {
    const ability = await this.caslAbilityFactory.createForUser(req.user.id);
    const entity = await this.service.findOne(id);
    if (!ability.can(Action.Delete, entity)) {
      throw new UnauthorizedException();
    }
    await this.service.remove(id, req.user.id);
    void this.commandBus.execute(new WorkspaceRemovedCommand(entity));
    return entity.id;
  }
}
