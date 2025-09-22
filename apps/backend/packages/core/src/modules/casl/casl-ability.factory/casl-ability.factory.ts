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
    >
  | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async createForUser(userId: string) {
    const user = await this.userService.findOne(userId);
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    if ([Role.Admin].includes(user.role)) {
      can(Action.Manage, 'all');
    } else {
      cannot(Action.Create, Account);
      can(Action.Create, User);
      can(Action.Create, App);
      can(Action.Create, Workspace);
      can(Action.Create, Integration);

      can(Action.Read, User, { accountId: user.accountId });
      can(Action.Read, Account, { createdBy: user.id });
      can(Action.Read, Account, { id: user.accountId });
      can(Action.Read, App, { createdBy: user.id });
      can(Action.Read, App, { id: user.accountId });
      can(Action.Read, Workspace, { createdBy: user.id });
      can(Action.Read, Workspace, { id: user.accountId });
      can(Action.Read, Integration, { createdBy: user.id });
      can(Action.Read, Integration, { id: user.accountId });

      can(Action.Update, User, { id: user.id });
      can(Action.Update, Account, { createdBy: user.id });
      can(Action.Update, App, { createdBy: user.id });
      can(Action.Update, Workspace, { createdBy: user.id });
      can(Action.Update, Integration, { createdBy: user.id });

      cannot(Action.Delete, User);
      cannot(Action.Delete, Account);
      cannot(Action.Delete, App);
      cannot(Action.Delete, Workspace);
      cannot(Action.Delete, Integration);
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    }) as AppAbility;
  }
}
