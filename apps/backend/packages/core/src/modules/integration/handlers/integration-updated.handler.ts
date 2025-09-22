import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IntegrationUpdatedCommand } from '../commands/integration-updated.command';

@CommandHandler(IntegrationUpdatedCommand)
export class IntegrationUpdatedHandler
  implements ICommandHandler<IntegrationUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: IntegrationUpdatedCommand) {
    this.logger.debug('Integration updated handler called', {
      correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
