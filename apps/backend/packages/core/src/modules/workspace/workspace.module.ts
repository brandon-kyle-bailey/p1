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

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([User, Workspace, WorkspaceUser]),
    CaslModule,
  ],
  controllers: [WorkspaceController],
  providers: [
    WorkspaceMapper,
    WorkspaceService,
    WorkspaceCreatedHandler,
    WorkspaceUpdatedHandler,
    WorkspaceRemovedHandler,
  ],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
