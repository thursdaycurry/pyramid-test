import { CacheModule, Module } from '@nestjs/common';
import { RafflesService } from './raffles.service';
import { RafflesController } from './raffles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { BidEntity } from 'src/bids/entities/bid.entity';
import { RafflesGateway } from './raffles.gateway';

import * as redisStore from 'cache-manager-ioredis';

import { RedisModule } from '@liaoliaots/nestjs-redis';



@Module({
  imports: [
    TypeOrmModule.forFeature([RaffleEntity, UserEntity, BidEntity, UserEntity]),
    CacheModule.register({
    store: redisStore,
    host: 'localhost',
    port: 6379,
    max: 100,
      ttl: 1200, // 10 seconds. 1200 20mins
    }),
    RedisModule.forRoot({
      config: {
        host: 'redis-12904.c82.us-east-1-2.ec2.cloud.redislabs.com',
        port: 12904,
        password: 'vLKsv485qBQNjEOP4tLBMV78Xr2jNC3S'
      }
    })
 ],
  controllers: [RafflesController],
  providers: [RafflesService, RafflesGateway],
  exports: [RafflesService],
})
export class RaffleModule {}
 