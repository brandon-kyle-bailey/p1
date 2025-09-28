import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { LoggingService } from '@app/logging';
import { HttpService } from '@nestjs/axios';
import { AppModule } from './modules/app.module';

// const httpsOptions = {
//   key: fs.readFileSync('./secrets/private-key.pem'),
//   cert: fs.readFileSync('./secrets/public-certificate.pem'),
// };

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // httpsOptions
  });
  const configService = app.get<ConfigService>(ConfigService);
  const httpService = app.get<HttpService>(HttpService);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api/core');
  app.useLogger(
    new LoggingService('core-service', {}, httpService, configService),
  );
  app.use(compression());
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  app.set('trust proxy', 'loopback'); // Trust requests from the loopback address

  const config = new DocumentBuilder()
    .setTitle('Core API')
    .setDescription('The Core API.')
    .setVersion('1.0')
    .addTag('core')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(configService.get<string>('PORT') ?? 3000);
}
void bootstrap();
