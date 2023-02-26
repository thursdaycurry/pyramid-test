import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
import { Cache } from 'cache-manager';
export declare class RafflesService {
    private readonly raffleRepository;
    private cacheManager;
    constructor(raffleRepository: Repository<RaffleEntity>, cacheManager: Cache);
    create(raffle: any): Promise<any>;
    findAllWithRedis(): Promise<unknown>;
    findAll(): Promise<RaffleEntity[]>;
    test(): Promise<RaffleEntity[]>;
    findOne(id: number): Promise<{
        data: RaffleEntity;
        raffleHistory: RaffleEntity[];
    }>;
    remove(raffleId: number): Promise<void>;
}
