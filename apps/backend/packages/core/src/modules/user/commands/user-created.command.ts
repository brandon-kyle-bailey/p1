import { Command } from '@nestjs/cqrs';
import { User } from '../entities/user.entity';

export class UserCreatedCommand extends Command<{ actionId: string }> {
  constructor(public readonly entity: User) {
    super();
  }
}
