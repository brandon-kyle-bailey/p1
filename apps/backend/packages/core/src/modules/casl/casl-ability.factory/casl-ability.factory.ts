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
import { App } from 'src/modules/app/entities/app.entity';
import { Workspace } from 'src/modules/workspace/entities/workspace.entity';
import { Integration } from 'src/modules/integration/entities/integration.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { Subscription } from 'src/modules/subscription/entities/subscription.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

type Subjects =
  | InferSubjects<
      | typeof User
      | typeof Account
      | typeof App
      | typeof Workspace
      | typeof Integration
      | typeof Department
      | typeof Subscription
    >
  | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async createForUser(userId: string) {
    const user = await this.userService.findOne(userId);
    const { can, build } = new AbilityBuilder(createMongoAbility);

    if ([Role.Admin].includes(user.role)) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Create, Account);
      can(Action.Read, Account, { id: user.accountId });
      can(Action.Update, Account, { createdBy: user.id });
      can(Action.Delete, Account, { createdBy: user.id });

      can(Action.Create, Department);
      can(Action.Read, Department, { accountId: user.accountId });
      can(Action.Update, Department, { createdBy: user.id });
      can(Action.Delete, Department, { createdBy: user.id });

      can(Action.Create, App);
      can(Action.Read, App, { accountId: user.accountId });
      can(Action.Update, App, { createdBy: user.id });
      can(Action.Delete, App, { createdBy: user.id });

      can(Action.Create, Integration);
      can(Action.Read, Integration, { accountId: user.accountId });
      can(Action.Update, Integration, { createdBy: user.id });
      can(Action.Delete, Integration, { createdBy: user.id });

      can(Action.Create, Subscription);
      can(Action.Read, Subscription, { accountId: user.accountId });
      can(Action.Update, Subscription, { createdBy: user.id });
      can(Action.Delete, Subscription, { createdBy: user.id });

      can(Action.Create, Workspace);
      can(Action.Read, Workspace, { accountId: user.accountId });
      can(Action.Update, Workspace, { createdBy: user.id });
      can(Action.Delete, Workspace, { createdBy: user.id });

      can(Action.Create, User);
      can(Action.Read, User, { accountId: user.accountId });
      can(Action.Update, User, { id: user.id });
      can(Action.Delete, User, { createdBy: user.id });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    }) as AppAbility;
  }
}
