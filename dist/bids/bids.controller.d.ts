import { Logger } from '@nestjs/common';
import { BidsService } from './bids.service';
export declare class BidsController {
    private readonly bidsService;
    createBidCount: number;
    logger: Logger;
    constructor(bidsService: BidsService);
    create(bid: any): Promise<void>;
    findAll(): Promise<import("./entities/bid.entity").BidEntity[]>;
    findBySize(size: any): Promise<import("./entities/bid.entity").BidEntity[]>;
    findByRange(sizeFrom: any, sizeTo: any): Promise<import("./entities/bid.entity").BidEntity[]>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
