import { BidsService } from './bids.service';
export declare class BidsController {
    private readonly bidsService;
    constructor(bidsService: BidsService);
    create(bid: any): void;
    findAll(): Promise<import("./entities/bid.entity").BidEntity[]>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
