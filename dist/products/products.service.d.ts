import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
export declare class ProductsService {
    private productRepository;
    private cacheManager;
    constructor(productRepository: Repository<ProductEntity>, cacheManager: Cache);
    getOrSetCache(): Promise<void>;
    create(product: any): void;
    findAll(): Promise<{
        count: number;
        data: ProductEntity[];
    }>;
    findAllWithRedis(): Promise<unknown>;
    findOne(productId: number): Promise<ProductEntity>;
    remove(productId: number): Promise<void>;
}
