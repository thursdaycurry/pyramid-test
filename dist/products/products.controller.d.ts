import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    create(product: any): void;
    findAll(): Promise<{
        count: number;
        data: import("./entities/product.entity").ProductEntity[];
    }>;
    findOne(productId: any): Promise<import("./entities/product.entity").ProductEntity>;
    remove(productId: any): Promise<void>;
}
