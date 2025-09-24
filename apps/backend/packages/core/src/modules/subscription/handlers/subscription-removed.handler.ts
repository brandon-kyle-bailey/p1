import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SubscriptionRemovedCommand } from '../commands/subscription-removed.command';

@CommandHandler(SubscriptionRemovedCommand)
export class SubscriptionRemovedHandler
  implements ICommandHandler<SubscriptionRemovedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
  ) {}

  async execute(command: SubscriptionRemovedCommand) {
    this.logger.debug('Subscription removed handler called', {
      correlationId: '4954e2c3-42c3-4aaf-b9ae-365f15d83ef6',
      command: JSON.stringify(command),
    });
    await new Promise((res) => res(true));
    return {
      actionId: crypto.randomUUID(),
    };
  }
}
