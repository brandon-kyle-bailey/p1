import { Injectable } from '@nestjs/common';
import { Role, User } from 'src/modules/user/entities/user.entity';

import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
} from '@casl/ability';
import { Account } from 'src/modules/account/entities/account.entity';

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
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    if ([Role.Owner, Role.Admin].includes(user.role)) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }

    can(Action.Update, Account, { createdBy: user.id });
    can(Action.Update, User, { id: user.id });
    cannot(Action.Delete, Account);
    cannot(Action.Delete, User);

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    }) as AppAbility;
  }
}
