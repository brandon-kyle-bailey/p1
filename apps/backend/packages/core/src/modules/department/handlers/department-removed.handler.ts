import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DepartmentRemovedCommand } from '../commands/department-removed.command';

@CommandHandler(DepartmentRemovedCommand)
export class DepartmentRemovedHandler
  implements ICommandHandler<DepartmentRemovedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DepartmentRemovedCommand) {
    this.logger.debug('Department removed handler called', {
      correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
