import { LoggingService } from '@app/logging';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Inject,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiHeader } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/guards/api-auth.guard';
import { ControllerCacheInterceptor } from 'src/interceptors/logging-cache.interceptor';
import { IncommingActivityCreatedCommand } from './commands/incomming-activity-created.command';
import { CreateIncommingActivityDto } from './dto/create-incomming-activity.dto';
import { IncommingActivityMapper } from './dto/incomming-activity.mapper';
import { IncommingActivityService } from './incomming-activity.service';

@Controller({ path: 'activities', version: '1' })
@UseInterceptors(ControllerCacheInterceptor, ClassSerializerInterceptor)
export class IncommingActivityController {
  constructor(
    @Inject(LoggingService) private readonly logger: LoggingService,
    @Inject(IncommingActivityService)
    private readonly service: IncommingActivityService,
    @Inject(IncommingActivityMapper)
    private readonly mapper: IncommingActivityMapper,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
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
  async create(@Body() dto: CreateIncommingActivityDto) {
    this.logger.debug(`${this.constructor.name}.${this.create.name} called`, {
      dto: JSON.stringify(dto),
    });
    const result = await this.service.create(dto);
    void this.commandBus.execute(new IncommingActivityCreatedCommand(result));
    return this.mapper.toInterface(result);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
