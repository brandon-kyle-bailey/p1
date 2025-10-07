import { LoggingModule } from '@app/logging';
import KeyvRedis from '@keyv/redis';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheableMemory } from 'cacheable';
import { Keyv } from 'keyv';
import { LoggingThrottlerGuard } from 'src/guards/logging-thottler.guard';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.model';
import { ActivityModule } from './activity/activity.module';
import { Activity } from './activity/entities/activity.model';
import { IncomingActivity } from './activity/entities/incoming-activity.model';
import { AiModule } from './ai/ai.module';
import { AppModule as AppsModule } from './app/app.module';
import { App } from './app/entities/app.model';
import { AuthModule } from './auth/auth.module';
import { CaslModule } from './casl/casl.module';
import { DeviceModule } from './device/device.module';
import { Device } from './device/entities/device.model';
import { User } from './user/entities/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'db'),
        port: Number(config.get<string>('DB_PORT', '5432')),
        username: config.get<string>('DB_USER', 'postgres'),
        password: config.get<string>('DB_PASS', 'postgres'),
        database: config.get<string>('DB_NAME', 'p1'),
        entities: [Account, User, App, Activity, IncomingActivity, Device],
        synchronize: true,
        autoLoadEntities: true,
        retryAttempts: 10,
        retryDelay: 5000,
      }),
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async (configService: ConfigService) => {
        const redisUrl = configService.get<string>(
          'REDIS_URL',
          'redis://localhost:6379',
        );
        return {
          stores: [
            new Keyv({ store: new KeyvRedis(redisUrl), ttl: 5_000 }),
            new Keyv({
              store: new CacheableMemory({ ttl: 5_000, lruSize: 5_000 }),
            }),
          ],
        };
      },
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    CqrsModule.forRoot(),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: 9999999999,
          ttl: 6000,
        },
      ],
    }),
    HttpModule,
    AccountModule,
    LoggingModule,
    UserModule,
    AuthModule,
    CaslModule,
    AppsModule,
    AiModule,
    ActivityModule,
    DeviceModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: LoggingThrottlerGuard }],
})
export class AppModule {}
