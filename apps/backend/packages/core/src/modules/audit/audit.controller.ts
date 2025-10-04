import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/guards/api-auth.guard';
import { ControllerCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { AuditService } from './audit.service';
import { CreateAuditDto } from './dto/create-audit.dto';

@Controller({ path: 'audit', version: '1' })
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Post()
  create(@Body() createAuditDto: CreateAuditDto) {
    return this.auditService.create(createAuditDto);
  }

  @Post('logs')
  @UseGuards(ApiKeyGuard)
  @ApiHeader({
    name: 'x-api-key',
    description: 'Client API key',
    required: true,
  })
  @ApiHeader({
    name: 'x-signature',
    description: 'Request signature',
    required: true,
  })
  @ApiHeader({
    name: 'x-timestamp',
    description: 'Request timestamp (milliseconds since epoch)',
    required: true,
  })
  logs(@Body() createAuditDto: CreateAuditDto) {
    return this.auditService.create(createAuditDto);
  }
}
