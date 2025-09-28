export interface DeviceProps {
  id: string;
  accountId: string;
  ipAddress: string;
  hostname: string;
  macAddress: string;
  os: string;
  arch: string;
  fingerprint: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class Device {
  props: DeviceProps;

  constructor(props: DeviceProps) {
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
  get ipAddress() {
    return this.props.ipAddress;
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

  updateUserId(userId: string) {
    this.props.userId = userId;
    this.touch();
  }

  softDelete(byDeviceId?: string) {
    this.props.deletedAt = new Date();
    if (byDeviceId) {
      this.props.deletedBy = byDeviceId;
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
