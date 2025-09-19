import { LoggingModule } from '@app/logging';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.model';
import { HealthModule } from './health/health.module';

import KeyvRedis from '@keyv/redis';
import { APP_GUARD } from '@nestjs/core';
import { CacheableMemory } from 'cacheable';
import { Keyv } from 'keyv';
import { LoggingThrottlerGuard } from 'src/guards/logging-thottler.guard';

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
        entities: [Account],
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
            new KeyvRedis(redisUrl),
            new Keyv({
              store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
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
          limit: 10,
          ttl: 6000,
        },
      ],
    }),
    HttpModule,
    HealthModule,
    AccountModule,
    LoggingModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: LoggingThrottlerGuard }],
})
export class AppModule {}
