import { Logger } from '@nestjs/common';
import { RafflesService } from './raffles.service';
export declare class RafflesController {
    private readonly rafflesService;
    findAllcount: number;
    logger: Logger;
    constructor(rafflesService: RafflesService);
    create(createRaffleDto: any): Promise<any>;
    findAll(): Promise<import("./entities/raffle.entity").RaffleEntity[]>;
    findAllWithRedis(): Promise<unknown>;
    findAllWithRedisCloud(): Promise<any>;
    findOne(id: any): Promise<import("./entities/raffle.entity").RaffleEntity>;
    remove(id: any): Promise<void>;
}
