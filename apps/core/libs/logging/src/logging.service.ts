/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class LoggingService extends ConsoleLogger implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    super.log(message, ...optionalParams);
  }
  fatal(message: any, ...optionalParams: any[]) {
    super.fatal(message, ...optionalParams);
  }
  error(message: any, ...optionalParams: any[]) {
    super.error(message, ...optionalParams);
  }
  warn(message: any, ...optionalParams: any[]) {
    super.warn(message, ...optionalParams);
  }
  debug(message: any, ...optionalParams: any[]) {
    super.debug(message, ...optionalParams);
  }
  verbose(message: any, ...optionalParams: any[]) {
    super.verbose(message, ...optionalParams);
  }
}
