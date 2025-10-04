export interface ActivityProps {
  id: string;
  accountId: string;
  feedId: string;
  activityId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class FanoutActivity {
  props: ActivityProps;

  constructor(props: ActivityProps) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  updateUserId(userId: string) {
    this.props.userId = userId;
    this.touch();
  }

  get id() {
    return this.props.id;
  }

  get accountId() {
    return this.props.accountId;
  }

  get feedId() {
    return this.props.feedId;
  }

  get activityId() {
    return this.props.activityId;
  }

  get userId() {
    return this.props.userId;
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

  softDelete(byActivityId?: string) {
    this.props.deletedAt = new Date();
    if (byActivityId) {
      this.props.deletedBy = byActivityId;
    }
    this.touch();
  }

  updateOwner(id: string) {
    this.props.createdBy = id;
    this.touch(id);
  }

  updateUpdatedBy(id: string) {
    this.touch(id);
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
