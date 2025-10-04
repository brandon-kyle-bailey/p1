export interface AuditProps {
  id: string;
  correlationId: string;
  message: string;
  timestamp: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
}

export class Audit {
  props: AuditProps;

  constructor(props: AuditProps) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this.props.id;
  }

  get correlationId() {
    return this.props.correlationId;
  }

  get message() {
    return this.props.message;
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
