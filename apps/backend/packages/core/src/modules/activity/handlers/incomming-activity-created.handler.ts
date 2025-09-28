import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IncommingActivityCreatedCommand } from '../commands/incomming-activity-created.command';

@CommandHandler(IncommingActivityCreatedCommand)
export class IncommingActivityCreatedHandler
  implements ICommandHandler<IncommingActivityCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: IncommingActivityCreatedCommand) {
    this.logger.debug('IncommingActivity created handler called', {
      correlationId: '51287cb5-e91d-481f-bff6-5f4e89770440',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
