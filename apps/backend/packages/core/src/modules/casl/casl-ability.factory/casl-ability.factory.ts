import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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
import { Device } from 'src/modules/device/entities/device.entity';
import { IncomingActivity } from 'src/modules/activity/entities/incoming-activity.entity';
import { IncomingExtensionActivity } from 'src/modules/activity/entities/incoming-extension-activity.entity';
import { Activity } from 'src/modules/activity/entities/activity.entity';

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
      | typeof Device
      | typeof IncomingActivity
      | typeof IncomingExtensionActivity
      | typeof Activity
    >
  | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async createForUser(userId: string) {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException();
    }
    const { can, build } = new AbilityBuilder(createMongoAbility);

    if ([Role.Admin].includes(user.role)) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Create, Account);
      can(Action.Read, Account, { id: user.accountId });
      can(Action.Update, Account, { createdBy: user.id });
      can(Action.Delete, Account, { createdBy: user.id });

      can(Action.Create, App);
      can(Action.Read, App, { accountId: user.accountId });
      can(Action.Update, App, { createdBy: user.id });
      can(Action.Delete, App, { createdBy: user.id });

      can(Action.Create, User);
      can(Action.Read, User, { accountId: user.accountId });
      can(Action.Update, User, { id: user.id });
      can(Action.Delete, User, { createdBy: user.id });

      can(Action.Create, Device);
      can(Action.Read, Device, { accountId: user.accountId });
      can(Action.Update, Device, { accountId: user.accountId });
      can(Action.Delete, Device, { createdBy: user.id });

      can(Action.Create, IncomingActivity);
      can(Action.Create, IncomingExtensionActivity);

      can(Action.Read, Activity, { accountId: user.accountId });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    }) as AppAbility;
  }
}
