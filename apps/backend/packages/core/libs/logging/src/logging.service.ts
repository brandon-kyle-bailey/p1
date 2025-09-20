/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { HttpService } from '@nestjs/axios';
import {
  ConsoleLogger,
  type ConsoleLoggerOptions,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LoggingService extends ConsoleLogger implements LoggerService {
  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    @Inject(HttpService) private readonly httpService: HttpService,
  ) {
    super(context, options);
  }
  async shipLogs(message: any, ...optionalParams: any[]) {
    try {
      await lastValueFrom(this.httpService.get('https://dummyjson.com/posts'));
      this.log(
        `${this.constructor.name}.${this.shipLogs.name}`,
        message,
        ...optionalParams,
      );
      // this.log(`${this.constructor.name}.${this.shipLogs.name}`, {
      //   correlationId: 'd35e8508-0a4e-4ca7-9953-e81b047acc2e',
      //   message: JSON.stringify(message),
      //   optionalParams: JSON.stringify(optionalParams),
      // });
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
    void this.shipLogs(message, optionalParams);
  }
  error(message: any, ...optionalParams: any[]) {
    super.error(message, ...optionalParams);
    void this.shipLogs(message, optionalParams);
  }
  warn(message: any, ...optionalParams: any[]) {
    super.warn(message, ...optionalParams);
    void this.shipLogs(message, optionalParams);
  }
  debug(message: any, ...optionalParams: any[]) {
    super.debug(message, ...optionalParams);
    void this.shipLogs(message, optionalParams);
  }
  verbose(message: any, ...optionalParams: any[]) {
    super.verbose(message, ...optionalParams);
  }
}
