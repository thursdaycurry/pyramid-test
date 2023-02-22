import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    create(product: any): void;
    findAll(): Promise<{
        count: number;
        data: ProductEntity[];
    }>;
    findOne(productId: number): Promise<ProductEntity>;
    remove(productId: number): Promise<void>;
}
