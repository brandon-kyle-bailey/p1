import { Account } from 'src/modules/account/entities/account.model';
import { App } from 'src/modules/app/entities/app.model';
import { User } from 'src/modules/user/entities/user.model';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IncommingActivity } from './incomming-activity.model';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  incommingActivityId: string;

  @OneToOne(() => IncommingActivity, (ia) => ia.activity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'incommingActivityId' })
  incommingActivity: IncommingActivity;

  @Column({ nullable: false })
  accountId: string;

  @Column({ nullable: true })
  userId?: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  appId: string;

  @ManyToOne(() => Account, (account) => account.activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @ManyToOne(() => User, (user) => user.activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => App, (app) => app.activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'appId' })
  app: App;

  @Column()
  source: string;

  @Column({ type: 'timestamp' })
  startTime: Date;

  @Column({ type: 'timestamp' })
  endTime: Date;

  @Column('int')
  duration: number;

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
