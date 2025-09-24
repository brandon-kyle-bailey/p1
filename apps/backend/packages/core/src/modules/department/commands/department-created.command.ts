import { Command } from '@nestjs/cqrs';
import { Department } from '../entities/department.entity';

export class DepartmentCreatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Department) {
    super();
  }
}
