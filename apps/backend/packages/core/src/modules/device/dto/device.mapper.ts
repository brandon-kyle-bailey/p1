import { Device as DeviceDomain } from '../entities/device.entity';
import { Device as DeviceModel } from '../entities/device.model';
import { DeviceDto } from './device.dto';

export class DeviceMapper {
  static toInterface(device: DeviceDomain): DeviceDto {
    return new DeviceDto(device.props);
  }
  toInterface(device: DeviceDomain): DeviceDto {
    return DeviceMapper.toInterface(device);
  }
  static toDomain(device: DeviceModel): DeviceDomain {
    return new DeviceDomain({
      ...device,
    });
  }
  toDomain(device: DeviceModel): DeviceDomain {
    return DeviceMapper.toDomain(device);
  }

  static toPersistence(device: DeviceDomain) {
    return {
      ...device.props,
    };
  }
  toPersistence(device: DeviceDomain) {
    return DeviceMapper.toPersistence(device);
  }
}
