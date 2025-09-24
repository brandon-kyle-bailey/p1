import { LoggingModule } from '@app/logging';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslModule } from '../casl/casl.module';
import { User } from '../user/entities/user.model';
import { DepartmentMapper } from './dto/department.mapper';
import { Department } from './entities/department.model';
import { DepartmentCreatedHandler } from './handlers/department-created.handler';
import { DepartmentRemovedHandler } from './handlers/department-removed.handler';
import { DepartmentUpdatedHandler } from './handlers/department-updated.handler';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  imports: [
    LoggingModule,
    TypeOrmModule.forFeature([User, Department]),
    CaslModule,
  ],
  controllers: [DepartmentController],
  providers: [
    DepartmentMapper,
    DepartmentService,
    DepartmentCreatedHandler,
    DepartmentUpdatedHandler,
    DepartmentRemovedHandler,
  ],
  exports: [DepartmentService],
})
export class DepartmentModule {}
