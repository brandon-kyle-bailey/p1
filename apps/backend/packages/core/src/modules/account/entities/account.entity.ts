export interface AccountProps {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  deletedBy?: string;
}

export class Account {
  private props: AccountProps;

  constructor(props: AccountProps) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this.props.id;
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

  get deletedBy() {
    return this.props.deletedBy;
  }

  updateName(newName: string) {
    this.props.name = newName;
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
