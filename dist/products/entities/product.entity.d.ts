import { RaffleEntity } from 'src/raffles/entities/raffle.entity';
import { CommonEntity } from 'src/common/entities/common.entities';
export declare class ProductEntity extends CommonEntity {
    productId: number;
    productImage: string;
    productModel: string;
    productName: string;
    productSize: number;
    productColor: string;
    productCategory: string;
    releasePrice: number;
    releaseDate: string;
    raffle: RaffleEntity[];
}
