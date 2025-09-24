import { Department as DepartmentDomain } from '../entities/department.entity';
import { Department as DepartmentModel } from '../entities/department.model';
import { DepartmentDto } from './department.dto';

export class DepartmentMapper {
  static toInterface(entity: DepartmentDomain): DepartmentDto {
    return new DepartmentDto(entity.props);
  }
  toInterface(entity: DepartmentDomain): DepartmentDto {
    return DepartmentMapper.toInterface(entity);
  }
  static toDomain(model: DepartmentModel): DepartmentDomain {
    return new DepartmentDomain({
      ...model,
    });
  }
  toDomain(model: DepartmentModel): DepartmentDomain {
    return DepartmentMapper.toDomain(model);
  }

  static toPersistence(entity: DepartmentDomain) {
    return {
      ...entity.props,
    };
  }
  toPersistence(entity: DepartmentDomain) {
    return DepartmentMapper.toPersistence(entity);
  }
}
