import { Account } from 'src/modules/account/entities/account.model';
import { User } from 'src/modules/user/entities/user.model';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Activity } from './activity.model';

@Entity('fanout_activities')
export class FanoutActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  accountId: string;

  @Column({ nullable: false })
  feedId: string;

  @Column({ nullable: false })
  activityId: string;

  @Column({ nullable: false })
  userId: string;

  @ManyToOne(() => Activity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'activityId' })
  activity: Activity;

  @ManyToOne(() => User, (user) => user.activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Account, (account) => account.activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

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
