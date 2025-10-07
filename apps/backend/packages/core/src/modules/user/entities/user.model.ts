import { Account } from 'src/modules/account/entities/account.model';
import { Activity } from 'src/modules/activity/entities/activity.model';
import { Device } from 'src/modules/device/entities/device.model';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './user.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Device, (device) => device.user, {
    cascade: true,
  })
  devices?: Device[];

  @Column({ nullable: false })
  accountId: string;

  @ManyToOne(() => Account, (account) => account.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @OneToMany(() => Activity, (activity) => activity.user, {
    cascade: true,
  })
  activities?: Activity[];

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  refresh_token?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  updatedBy?: string;

  @Column({ nullable: true })
  deletedBy?: string;
}
