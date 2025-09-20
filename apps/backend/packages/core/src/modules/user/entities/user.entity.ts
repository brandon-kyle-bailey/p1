export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserProps {
  id: string;
  email: string;
  password: string;
  name?: string;
  role?: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  deletedBy?: string;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      role: props.role ?? UserRole.USER,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this.props.id;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get name() {
    return this.props.name;
  }

  get role() {
    return this.props.role;
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

  updateRole(newRole: UserRole) {
    this.props.role = newRole;
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
