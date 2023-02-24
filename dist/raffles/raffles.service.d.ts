import { Repository } from 'typeorm';
import { RaffleEntity } from './entities/raffle.entity';
export declare class RafflesService {
    private readonly raffleRepository;
    constructor(raffleRepository: Repository<RaffleEntity>);
    create(raffle: any): Promise<any>;
    findAll(): Promise<RaffleEntity[]>;
    test(): Promise<RaffleEntity[]>;
    findOne(id: number): Promise<{
        data: RaffleEntity;
        raffleHistory: RaffleEntity[];
    }>;
    remove(raffleId: number): Promise<void>;
}
