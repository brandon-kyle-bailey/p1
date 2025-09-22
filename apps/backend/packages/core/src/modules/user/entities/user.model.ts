import { Account } from 'src/modules/account/entities/account.model';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './user.entity';
import { WorkspaceUser } from 'src/modules/workspace/entities/workspace-user.model';
import { Workspace } from 'src/modules/workspace/entities/workspace.model';
import { Integration } from 'src/modules/integration/entities/integration.model';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  accountId: string;

  @ManyToOne(() => Account, (account) => account.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'accountId' })
  account: Account;

  @OneToMany(() => WorkspaceUser, (wu) => wu.user)
  workspaceUsers: WorkspaceUser[];

  @ManyToMany(() => Workspace, (workspace) => workspace.users)
  @JoinTable({
    name: 'workspace_users',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'workspaceId', referencedColumnName: 'id' },
  })
  workspaces: Workspace[];

  @OneToMany(() => Integration, (integration) => integration.user, {
    cascade: true,
  })
  integrations?: Integration[];

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
