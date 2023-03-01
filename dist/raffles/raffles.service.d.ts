import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { Cache } from 'cache-manager';
import { RedisService } from 'nestjs-redis';
export declare class RafflesService {
    private readonly raffleRepository;
    private cacheManager;
    private readonly redisService;
    constructor(raffleRepository: Repository<RaffleEntity>, cacheManager: Cache, redisService: RedisService);
    create(raffle: any): Promise<any>;
    findAllWithRedis(): Promise<unknown>;
    findAllWithRedisCloud(): Promise<import("ioredis/built/Redis").default>;
    findAll(): Promise<RaffleEntity[]>;
    findOne(id: number): Promise<RaffleEntity>;
    test(): Promise<RaffleEntity[]>;
    remove(raffleId: number): Promise<void>;
}
