import { UserEntity } from './../../users/entities/user.entity';
import { CommonEntity } from 'src/common/entities/common.entities';
import { ProductEntity } from 'src/products/entities/product.entity';
import { BidEntity } from 'src/bids/entities/bid.entity';
export declare class RaffleEntity extends CommonEntity {
    raffleId: number;
    dateStart: string;
    dateEnd: string;
    isClosed: boolean;
    closedPrice: number;
    usersId: number;
    productId: number;
    user: UserEntity;
    product: ProductEntity;
    bid: BidEntity[];
}
