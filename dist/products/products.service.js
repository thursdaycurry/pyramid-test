"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
let ProductsService = class ProductsService {
    constructor(productRepository, cacheManager) {
        this.productRepository = productRepository;
        this.cacheManager = cacheManager;
    }
    async getOrSetCache() {
    }
    create(product) {
        this.productRepository.save(product);
    }
    async findAll() {
        const result = await this.productRepository.find();
        const count = result.length;
        return { count: count, data: result };
    }
    async findAllWithRedis() {
        const cachedResult = await this.cacheManager.get('allProducts');
        if (cachedResult) {
            console.log(`result from Redis :D `);
            return cachedResult;
        }
        const result = await this.productRepository.find();
        await this.cacheManager.set('allProducts', result, 2);
        console.log(`normal result`);
        return result;
    }
    findOne(productId) {
        return this.productRepository.findOne({ where: { productId: productId } });
    }
    async remove(productId) {
        await this.productRepository.delete({ productId });
    }
    ;
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map