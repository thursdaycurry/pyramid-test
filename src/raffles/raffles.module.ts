import { CacheModule, Module } from '@nestjs/common';
import { RafflesService } from './raffles.service';
import { RafflesController } from './raffles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { BidEntity } from 'src/bids/entities/bid.entity';
import { RafflesGateway } from './raffles.gateway';

import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [TypeOrmModule.forFeature([RaffleEntity, UserEntity, BidEntity, UserEntity]),
  CacheModule.register({
    store: redisStore,
    host: 'localhost',
    port: 6379,
    max: 100,
    ttl: 1200, // 10 seconds. 1200 20mins
}),],
  controllers: [RafflesController],
  providers: [RafflesService, RafflesGateway],
  exports: [RafflesService],
})
export class RaffleModule {}
 