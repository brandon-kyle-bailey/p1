/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { HttpService } from '@nestjs/axios';
import {
  ConsoleLogger,
  type ConsoleLoggerOptions,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LoggingService extends ConsoleLogger implements LoggerService {
  private _logShippingEndpoint: string;
  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    @Inject(HttpService) private readonly httpService: HttpService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    super(context, options);
    this._logShippingEndpoint =
      this.configService.get<string>('LOG_SHIPPING_URL') ?? '';
  }
  async shipLogs(message: any, ...optionalParams: any[]) {
    try {
      await lastValueFrom(this.httpService.post(this._logShippingEndpoint));
      this.log(
        `${this.constructor.name}.${this.shipLogs.name}`,
        message,
        ...optionalParams,
      );
    } catch (err) {
      this.error(
        `${this.constructor.name}.${this.shipLogs.name} caught an exception`,
        {
          correlationId: '959e0817-023e-414c-98ee-252527126fba',
          err: JSON.stringify(err),
        },
      );
    }
  }
  log(message: any, ...optionalParams: any[]) {
    super.log(message, ...optionalParams);
  }
  fatal(message: any, ...optionalParams: any[]) {
    super.fatal(message, ...optionalParams);
    // void this.shipLogs(message, optionalParams);
  }
  error(message: any, ...optionalParams: any[]) {
    super.error(message, ...optionalParams);
    // void this.shipLogs(message, optionalParams);
  }
  warn(message: any, ...optionalParams: any[]) {
    super.warn(message, ...optionalParams);
    // void this.shipLogs(message, optionalParams);
  }
  debug(message: any, ...optionalParams: any[]) {
    super.debug(message, ...optionalParams);
    // void this.shipLogs(message, optionalParams);
  }
  verbose(message: any, ...optionalParams: any[]) {
    super.verbose(message, ...optionalParams);
  }
}
