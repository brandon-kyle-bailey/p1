import { Inject, Injectable } from '@nestjs/common';
import { Role, User } from 'src/modules/user/entities/user.entity';

import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
} from '@casl/ability';
import { Account } from 'src/modules/account/entities/account.entity';
import { UserService } from 'src/modules/user/user.service';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

type Subjects = InferSubjects<typeof User | typeof Account> | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async createForUser(userId: string) {
    const user = await this.userService.findOne(userId);
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    if ([Role.Owner, Role.Admin].includes(user.role)) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Create, User);

      can(Action.Read, User);
      can(Action.Read, Account, { createdBy: user.id });
      can(Action.Read, Account, { id: user.accountId });

      can(Action.Update, User, { id: user.id });
      can(Action.Update, Account, { createdBy: user.id });

      cannot(Action.Create, Account);

      cannot(Action.Delete, User);
      cannot(Action.Delete, Account);
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    }) as AppAbility;
  }
}
