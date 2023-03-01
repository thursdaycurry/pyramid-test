import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { Cache } from 'cache-manager';
import Redis from 'ioredis';
export declare class RafflesService {
    private readonly raffleRepository;
    private cacheManager;
    private readonly redis;
    constructor(raffleRepository: Repository<RaffleEntity>, cacheManager: Cache, redis: Redis);
    create(raffle: any): Promise<any>;
    findAllWithRedis(): Promise<unknown>;
    findAllWithRedisCloud(): Promise<any>;
    findAll(): Promise<RaffleEntity[]>;
    findOne(id: number): Promise<RaffleEntity>;
    remove(raffleId: number): Promise<void>;
}
