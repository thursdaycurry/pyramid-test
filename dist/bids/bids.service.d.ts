import { BidEntity } from './entities/bid.entity';
import { Repository } from 'typeorm';
export declare class BidsService {
    private readonly bidRepository;
    constructor(bidRepository: Repository<BidEntity>);
    create(bid: any): Promise<void>;
    findAll(): Promise<BidEntity[]>;
    findBySize(size: any): Promise<BidEntity[]>;
    findByRange(sizeFrom: any, sizeTo: any): Promise<BidEntity[]>;
    remove(bidId: number): Promise<import("typeorm").DeleteResult>;
}
