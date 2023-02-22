import { CommonEntity } from 'src/common/entities/common.entities';
import { RaffleEntity } from 'src/raffles/entities/raffle.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class BidEntity extends CommonEntity {
    bidId: number;
    bidSize: number;
    bidPrice: number;
    bidQuantity: number;
    raffle: RaffleEntity;
    user: UserEntity;
}
