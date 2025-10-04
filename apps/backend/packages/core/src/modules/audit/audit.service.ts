import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuditDto } from './dto/create-audit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Audit } from './entities/audit.model';
import { Audit as AuditDomain } from './entities/audit.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { AuditMapper } from './dto/audit.mapper';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audit)
    private readonly repo: Repository<Audit>,
    @Inject(AuditMapper)
    private readonly mapper: AuditMapper,
  ) {}

  async create(dto: CreateAuditDto) {
    const entity = this.repo.create({
      ...dto,
    });
    const result = await this.repo.save(entity);
    return this.mapper.toDomain(result);
  }

  async findAll(
    skip: number = 0,
    take: number = 100,
    where: FindOptionsWhere<Audit>,
    sortField: keyof Audit = 'timestamp',
    sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    try {
      const [entities, count] = await this.repo.findAndCount({
        skip,
        take,
        where,
        order: { [sortField]: sortOrder.toUpperCase() as 'ASC' | 'DESC' },
      });
      return {
        data: entities.map((entity) => this.mapper.toDomain(entity)),
        pagination: {
          total: count,
          skip,
          take,
          hasNextPage: skip + take < count,
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: any) {
      return {
        data: [],
        pagination: { total: 0, skip: 0, take, hasNextPage: false },
      };
    }
  }

  async findOne(id: string): Promise<AuditDomain> {
    try {
      const entity = await this.repo.findOneBy({ id });
      if (!entity) {
        throw new NotFoundException();
      }
      return this.mapper.toDomain(entity);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: any) {
      throw new InternalServerErrorException();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} audit`;
  }
}
