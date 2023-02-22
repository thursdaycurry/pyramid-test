import { BidEntity } from 'src/bids/entities/bid.entity';
import { CommonEntity } from 'src/common/entities/common.entities';
import { RaffleEntity } from 'src/raffles/entities/raffle.entity';
export declare class UserEntity extends CommonEntity {
    usersId: number;
    userId: string;
    password: string;
    raffle: RaffleEntity[];
    bid: BidEntity[];
}
