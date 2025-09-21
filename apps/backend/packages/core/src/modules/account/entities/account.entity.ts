export interface AccountProps {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class Account {
  props: AccountProps;

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

  updateOwner(id: string) {
    this.props.createdBy = id;
    this.touch();
  }

  updateUpdatedBy(id: string) {
    this.touch(id);
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

  private touch(updatedBy?: string) {
    this.props.updatedAt = new Date();
    if (updatedBy) {
      this.props.updatedBy = updatedBy;
    }
  }
}
