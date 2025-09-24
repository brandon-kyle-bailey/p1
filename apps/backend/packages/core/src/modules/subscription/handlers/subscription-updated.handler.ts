import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SubscriptionUpdatedCommand } from '../commands/subscription-updated.command';

@CommandHandler(SubscriptionUpdatedCommand)
export class SubscriptionUpdatedHandler
  implements ICommandHandler<SubscriptionUpdatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: SubscriptionUpdatedCommand) {
    this.logger.debug('Subscription updated handler called', {
      correlationId: '67a859be-a168-4574-bbc3-c05b27dc4612',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
