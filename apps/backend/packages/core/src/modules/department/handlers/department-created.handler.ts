import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DepartmentCreatedCommand } from '../commands/department-created.command';

@CommandHandler(DepartmentCreatedCommand)
export class DepartmentCreatedHandler
  implements ICommandHandler<DepartmentCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DepartmentCreatedCommand) {
    this.logger.debug('Department created handler called', {
      correlationId: '8adf5d96-ec23-45bc-abf4-3d650c30a76a',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
