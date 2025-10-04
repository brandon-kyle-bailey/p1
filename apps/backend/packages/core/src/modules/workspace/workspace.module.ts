import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { LoggingModule } from '@app/logging';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.model';
import { CaslModule } from '../casl/casl.module';
import { WorkspaceMapper } from './dto/workspace.mapper';
import { WorkspaceCreatedHandler } from './handlers/workspace-created.handler';
import { WorkspaceRemovedHandler } from './handlers/workspace-removed.handler';
import { WorkspaceUpdatedHandler } from './handlers/workspace-updated.handler';
import { User } from '../user/entities/user.model';
import { WorkspaceUser } from './entities/workspace-user.model';
import { WorkspaceUserMapper } from './dto/workspace-user.mapper';
import { WorkspaceUserService } from './workspace-user.service';
import { WorkspaceUserController } from './workspace-user.controller';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([User, Workspace, WorkspaceUser]),
    CaslModule,
  ],
  controllers: [WorkspaceController, WorkspaceUserController],
  providers: [
    WorkspaceMapper,
    WorkspaceUserMapper,
    WorkspaceService,
    WorkspaceUserService,
    WorkspaceCreatedHandler,
    WorkspaceUpdatedHandler,
    WorkspaceRemovedHandler,
  ],
  exports: [WorkspaceService, WorkspaceUserService],
})
export class WorkspaceModule {}
