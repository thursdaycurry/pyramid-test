import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';

import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RafflesService {
  constructor(
    @InjectRepository(RaffleEntity) private readonly raffleRepository: Repository<RaffleEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRedis() private readonly redis: Redis,
  ) { }

  create(raffle) {
    console.log(`raffle create: ${JSON.stringify(raffle)}`);
    return this.raffleRepository.save(raffle);
  }

  // raffle - findAll v0.1
  async findAllWithRedis() {
    const cachedResult = await this.cacheManager.get('findAllRaffles');
    if (cachedResult) {
      console.log(`Raffle result from Redis :D `)
      return cachedResult;
    }
    const result = await this.raffleRepository
      .createQueryBuilder('raffle')
      .leftJoinAndSelect('raffle.product', 'product')
      .leftJoinAndSelect('raffle.bid', 'bid')
      .select([
        'raffle.raffleId',
        'product.productImage',
        'product.productColor',
        'product.productModel',
        'product.productName',
        'product.releasePrice',
        'raffle.dateEnd',
        'bid.bidId'
      ])
      .orderBy('raffle.dateEnd', 'DESC')
      .addOrderBy('raffle.raffleId', 'DESC')
      .take(10)
      .getMany();
    
    await this.cacheManager.set('findAllRaffles', result)

    console.log(`normal result`)
    return result;
  }

    // raffle - findAll v0.2
  async findAllWithRedisCloud() {
    
    const cachedResult = await this.redis.get('raffles');

    
    if (cachedResult) {
      console.log(`Raffle result from Redis :D `)
      return JSON.parse(cachedResult);
    }
    const result = await this.raffleRepository
      .createQueryBuilder('raffle')
      .leftJoinAndSelect('raffle.product', 'product')
      .leftJoinAndSelect('raffle.bid', 'bid')
      .select([
        'raffle.raffleId',
        'product.productImage',
        'product.productColor',
        'product.productModel',
        'product.productName',
        'product.releasePrice',
        'raffle.dateEnd',
        'bid.bidId'
      ])
      .orderBy('raffle.dateEnd', 'DESC')
      .addOrderBy('raffle.raffleId', 'DESC')
      .take(10)
      .getMany();
    
    await this.redis.set('raffles', JSON.stringify(result), 'EX', 10)

    console.log(`normal result`)
    return result;
      
    }

  // 래플 리스트 전체 조회
  async findAll() {
    // const result = await this.raffleRepository.find({
    //   where: { isClosed: false },
    //   relations: {
    //     product: true,
    //     bid: true,
    //     user: true,
    //   },
    // });
    // const count = result.length;
    // return { count: count, data: result };

    // const result = await this.raffleRepository.find({
    //   take: 10,
    //   order: {
    //     dateEnd: 'DESC'
    //   },
    //   relations: {
    //     product: true,
    //     bid: true,
    //     user: true
    //   }
    // });
    // const count = result.length;
    // return { count: count, data: result };

    // const result = await this.raffleRepository
    //   .createQueryBuilder('raffle')
    //   .where('raffle.isClosed = :boolean', { boolean: 0})
    //   .leftJoinAndSelect('raffle.product', 'product')
    //   .leftJoinAndSelect('raffle.bid', 'bid')
    //   .leftJoinAndSelect('raffle.user', 'user')
    //   .take(10)
    //   .getMany();

    const result = await this.raffleRepository
      .createQueryBuilder('raffle')
      .leftJoinAndSelect('raffle.product', 'product')
      // .leftJoinAndSelect('raffle.bid', 'bid')
      .select([
        'raffle.raffleId',
        'product.productImage',
        'product.productColor',
        'product.productModel',
        'product.productName',
        'product.releasePrice',
        'raffle.dateEnd',
      ])
      .loadRelationCountAndMap('raffle.bidCount', 'raffle.bid')
      .orderBy('raffle.dateEnd', 'DESC')
      .addOrderBy('raffle.raffleId', 'DESC')
      .take(10)
      .getMany();

    return result;
  }

    // 래플 리스트 전체 조회
  async findOne(id: number) {
    
    const result = await this.raffleRepository
        .createQueryBuilder('raffle')
        .leftJoinAndSelect('raffle.product', 'product')
         .where('raffle.raffleId = :id', { id: id })
        .select([
          'raffle.raffleId',
          'product.productImage',
          'product.productColor',
          'product.productModel',
          'product.productName',
          'product.releasePrice',
          'raffle.dateEnd',
        ])
        .loadRelationCountAndMap('raffle.bidCount', 'raffle.bid')
        .orderBy('raffle.dateEnd', 'DESC')
        .addOrderBy('raffle.raffleId', 'DESC')
        .getOne();
  
      return result;
    }

  // 특정 상품 삭제
  async remove(raffleId: number) {
    await this.raffleRepository.delete({ raffleId });
  }

  // update(id: number, updateRaffleDto: UpdateRaffleDto) {
  //   return `This action updates a #${id} raffle`;
  // }
}
