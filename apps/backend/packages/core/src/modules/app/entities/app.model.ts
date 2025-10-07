import { Account } from 'src/modules/account/entities/account.model';
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
import { Category } from './app.entity';
import { Activity } from 'src/modules/activity/entities/activity.model';

@Entity('apps')
export class App {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  accountId: string;

  @ManyToOne(() => Account, (account) => account.apps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @OneToMany(() => Activity, (activity) => activity.app, {
    cascade: true,
  })
  activities?: Activity[];

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Category, default: Category.None })
  category: Category;

  @Column({ type: 'text', nullable: true })
  description?: string;

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
