import { Command } from '@nestjs/cqrs';
import { Department } from '../entities/department.entity';

export class DepartmentRemovedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: Department) {
    super();
  }
}
