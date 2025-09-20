import * as bcrypt from 'bcrypt';

export enum Role {
  User = 'user',
  Admin = 'admin',
  Owner = 'owner',
}

export interface UserProps {
  id: string;
  accountId: string;
  email: string;
  password: string;
  role: Role;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy: string;
  updatedBy: string;
  deletedBy?: string;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      password: bcrypt.hashSync(props.password, 10),
      role: props.role,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this.props.id;
  }

  get accountId() {
    return this.props.accountId;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get role() {
    return this.props.role;
  }

  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get deletedAt() {
    return this.props.deletedAt;
  }

  get createdBy() {
    return this.props.createdBy;
  }

  get updatedBy() {
    return this.props.updatedBy;
  }

  get deletedBy() {
    return this.props.deletedBy;
  }

  updateName(newName: string) {
    this.props.name = newName;
    this.touch();
  }

  updateEmail(newEmail: string) {
    this.props.email = newEmail;
    this.touch();
  }

  updatePassword(newPassword: string) {
    this.props.password = newPassword;
    this.touch();
  }

  softDelete(byUserId?: string) {
    this.props.deletedAt = new Date();
    if (byUserId) {
      this.props.deletedBy = byUserId;
    }
  }

  restore() {
    this.props.deletedAt = undefined;
    this.props.deletedBy = undefined;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }
}
