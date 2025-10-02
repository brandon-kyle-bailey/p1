import { LoggingService } from '@app/logging';
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppService } from 'src/modules/app/app.service';
import { CreateAppDto } from 'src/modules/app/dto/create-app.dto';
import { DeviceService } from 'src/modules/device/device.service';
import { CreateDeviceDto } from 'src/modules/device/dto/create-device.dto';
import { NIL } from 'uuid';
import { ActivityService } from '../activity.service';
import { IncomingActivityCreatedCommand } from '../commands/incoming-activity-created.command';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { AppCreatedCommand } from 'src/modules/app/commands/app-created.command';
import { DeviceCreatedCommand } from 'src/modules/device/commands/device-created.command';

@CommandHandler(IncomingActivityCreatedCommand)
export class IncomingActivityCreatedHandler
  implements ICommandHandler<IncomingActivityCreatedCommand>
{
  constructor(
    @Inject(LoggingService)
    private readonly logger: LoggingService,
    @Inject(AppService) private readonly appService: AppService,
    @Inject(ActivityService) private readonly activityService: ActivityService,
    @Inject(DeviceService) private readonly deviceService: DeviceService,
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  async execute(command: IncomingActivityCreatedCommand) {
    try {
      const {
        id,
        accountId,
        ipAddress,
        hostuser,
        hostname,
        macAddress,
        os,
        arch,
        name,
        deviceFingerprint,
        title,
        source,
        expression,
        startTime,
        endTime,
      } = command.entity;

      // app discovery
      let foundApp = await this.appService.findOneByName(name, accountId);
      if (!foundApp) {
        const createAppDto = new CreateAppDto();
        createAppDto.name = name;
        createAppDto.accountId = accountId;
        foundApp = await this.appService.create(createAppDto, NIL);
        void this.commandBus.execute(new AppCreatedCommand(foundApp));
      }

      // device discovery
      let foundDevice = await this.deviceService.findOneBy({
        accountId,
        hostuser,
        hostname,
        macAddress,
        os,
        arch,
      });

      if (!foundDevice) {
        const createDeviceDto = new CreateDeviceDto();
        createDeviceDto.accountId = accountId;
        createDeviceDto.arch = arch;
        createDeviceDto.hostname = hostname;
        createDeviceDto.ipAddress = ipAddress;
        createDeviceDto.os = os;
        createDeviceDto.macAddress = macAddress;
        createDeviceDto.fingerprint = deviceFingerprint;
        foundDevice = await this.deviceService.create(createDeviceDto, NIL);
        void this.commandBus.execute(new DeviceCreatedCommand(foundDevice));
      }

      // activity creation
      const createActivityDto = new CreateActivityDto();
      createActivityDto.accountId = accountId;
      createActivityDto.incomingActivityId = id;
      createActivityDto.appId = foundApp.id;
      if (foundDevice.userId) {
        createActivityDto.userId = foundDevice.userId;
      }
      createActivityDto.source = source;
      createActivityDto.startTime = startTime;
      createActivityDto.endTime = endTime;
      createActivityDto.createdBy = foundDevice.userId ?? NIL;
      createActivityDto.description = `User visited ${expression} in window ${title} of ${name}`;
      await this.activityService.create(createActivityDto);
    } catch (error) {
      this.logger.error(error, {
        correlationId: 'dd447c82-4e60-4b6e-b856-f356ca5c39cb',
      });
    }

    return {
      actionId: crypto.randomUUID(),
    };
  }
}
