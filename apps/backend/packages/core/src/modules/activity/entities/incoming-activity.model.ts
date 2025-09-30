import { Account } from 'src/modules/account/entities/account.model';
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
import { Activity } from './activity.model';

@Entity('incoming_activities')
export class IncomingActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  externalActivityId: string;

  @Column({ nullable: false })
  accountId: string;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(() => Account, (account) => account.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @OneToOne(() => Activity, (a) => a.incomingActivity)
  activity: Activity;

  @Column({ nullable: true })
  ipAddress: string;

  @Column({ nullable: true })
  hostname: string;

  @Column({ nullable: true })
  macAddress: string;

  @Column({ nullable: true })
  os: string;

  @Column({ nullable: true })
  arch: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  expression: string;

  @Column()
  deviceFingerprint: string;

  @Column()
  source: string;

  @Column({ type: 'timestamp' })
  startTime: Date;

  @Column({ type: 'timestamp' })
  endTime: Date;

  @Column('int', { nullable: true })
  duration?: number;

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
