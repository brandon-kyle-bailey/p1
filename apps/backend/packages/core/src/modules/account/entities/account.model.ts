import { Activity } from 'src/modules/activity/entities/activity.model';
import { App } from 'src/modules/app/entities/app.model';
import { Department } from 'src/modules/department/entities/department.model';
import { Device } from 'src/modules/device/entities/device.model';
import { Integration } from 'src/modules/integration/entities/integration.model';
import { Subscription } from 'src/modules/subscription/entities/subscription.model';
import { User } from 'src/modules/user/entities/user.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.account, {
    cascade: true,
  })
  users?: User[];

  @OneToMany(() => Activity, (activity) => activity.account, {
    cascade: true,
  })
  activities?: Activity[];

  @OneToMany(() => Device, (device) => device.account, {
    cascade: true,
  })
  devices?: Device[];

  @OneToMany(() => Department, (relation) => relation.account, {
    cascade: true,
  })
  departments?: Department[];

  @OneToMany(() => App, (relation) => relation.account, {
    cascade: true,
  })
  apps?: App[];

  @OneToMany(() => Integration, (relation) => relation.account, {
    cascade: true,
  })
  integrations?: Integration[];

  @OneToMany(() => Subscription, (relation) => relation.account, {
    cascade: true,
  })
  subscriptions?: Subscription[];

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  createdBy?: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  updatedBy?: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true })
  deletedBy?: string;
}
