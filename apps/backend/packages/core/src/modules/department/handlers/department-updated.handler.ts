import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DepartmentUpdatedCommand } from '../commands/department-updated.command';

@CommandHandler(DepartmentUpdatedCommand)
export class DepartmentUpdatedHandler
  implements ICommandHandler<DepartmentUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: DepartmentUpdatedCommand) {
    this.logger.debug('Department updated handler called', {
      correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
