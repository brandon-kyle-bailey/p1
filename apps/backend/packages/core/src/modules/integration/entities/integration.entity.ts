export interface IntegrationProps {
  id: string;
  accountId: string;
  userId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class Integration {
  props: IntegrationProps;

  constructor(props: IntegrationProps) {
    this.props = {
      ...props,
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

  get userId() {
    return this.props.userId;
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

  softDelete(byUserId?: string) {
    this.props.deletedAt = new Date();
    if (byUserId) {
      this.props.deletedBy = byUserId;
    }
    this.touch();
  }

  updateOwner(id: string) {
    this.props.createdBy = id;
    this.touch();
  }

  updateUpdatedBy(id: string) {
    this.props.updatedBy = id;
    this.touch();
  }

  restore() {
    this.props.deletedAt = undefined;
    this.props.deletedBy = undefined;
    this.touch();
  }

  private touch(id?: string) {
    this.props.updatedAt = new Date();
    if (id) {
      this.props.updatedBy = id;
    }
  }
}
