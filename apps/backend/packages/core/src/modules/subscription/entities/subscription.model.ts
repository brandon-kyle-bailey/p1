import { Account } from 'src/modules/account/entities/account.model';
import { App } from 'src/modules/app/entities/app.model';
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

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  accountId: string;

  @ManyToOne(() => Account, (relation) => relation.subscriptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @Column({ nullable: false })
  appId: string;

  @ManyToOne(() => App, (relation) => relation.subscriptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'appId' })
  app: App;

  @Column()
  expression: string;

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
