import { CacheModule, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { RaffleEntity } from '../raffles/entities/raffle.entity';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, RaffleEntity]),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      max: 100,
  }),],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductModule {}
