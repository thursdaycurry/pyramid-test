import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { Cache } from 'cache-manager';
export declare class RafflesService {
    private readonly raffleRepository;
    private cacheManager;
    constructor(raffleRepository: Repository<RaffleEntity>, cacheManager: Cache);
    create(raffle: any): Promise<any>;
    findAllWithRedis(): Promise<unknown>;
    findAllWithRedisCloud(): Promise<string>;
    findAll(): Promise<RaffleEntity[]>;
    findOne(id: number): Promise<RaffleEntity>;
    test(): Promise<RaffleEntity[]>;
    remove(raffleId: number): Promise<void>;
}
