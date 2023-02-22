import { Logger } from '@nestjs/common';
import { RafflesService } from './raffles.service';
export declare class RafflesController {
    private readonly rafflesService;
    findAllcount: number;
    logger: Logger;
    constructor(rafflesService: RafflesService);
    create(createRaffleDto: any): Promise<any>;
    findAll(): Promise<{
        count: number;
        data: import("./entities/raffle.entity").RaffleEntity[];
    }>;
    findOne(id: any): Promise<{
        data: import("./entities/raffle.entity").RaffleEntity;
        raffleHistory: import("./entities/raffle.entity").RaffleEntity[];
    }>;
    remove(id: any): Promise<void>;
}
