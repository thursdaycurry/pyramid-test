import { BidEntity } from './entities/bid.entity';
import { Repository } from 'typeorm';
export declare class BidsService {
    private readonly bidRepository;
    constructor(bidRepository: Repository<BidEntity>);
    create(bid: any): void;
    findAll(): Promise<BidEntity[]>;
    remove(bidId: number): Promise<import("typeorm").DeleteResult>;
}
