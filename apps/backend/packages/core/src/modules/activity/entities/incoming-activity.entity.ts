export interface IncomingActivityProps {
  id: string;
  externalActivityId: string;
  accountId: string;
  userId: string;
  ipAddress: string;
  hostuser: string;
  hostname: string;
  macAddress: string;
  os: string;
  arch: string;
  name: string;
  deviceFingerprint: string;
  title: string;
  source: string;
  expression: string;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class IncomingActivity {
  props: IncomingActivityProps;

  constructor(props: IncomingActivityProps) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this.props.id;
  }

  get externalActivityId() {
    return this.props.externalActivityId;
  }

  get accountId() {
    return this.props.accountId;
  }

  get userId() {
    return this.props.userId;
  }

  get ipAddress() {
    return this.props.ipAddress;
  }
  get hostuser() {
    return this.props.hostuser;
  }
  get hostname() {
    return this.props.hostname;
  }
  get macAddress() {
    return this.props.macAddress;
  }
  get os() {
    return this.props.os;
  }
  get arch() {
    return this.props.arch;
  }

  get name() {
    return this.props.name;
  }

  get source() {
    return this.props.source;
  }

  get deviceFingerprint() {
    return this.props.deviceFingerprint;
  }

  get title() {
    return this.props.title;
  }

  get expression() {
    return this.props.expression;
  }

  get startTime() {
    return this.props.startTime;
  }

  get endTime() {
    return this.props.endTime;
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

  softDelete(byIncomingActivityId?: string) {
    this.props.deletedAt = new Date();
    if (byIncomingActivityId) {
      this.props.deletedBy = byIncomingActivityId;
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
