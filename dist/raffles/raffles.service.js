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
exports.RafflesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const raffle_entity_1 = require("./entities/raffle.entity");
const typeorm_2 = require("@nestjs/typeorm");
let RafflesService = class RafflesService {
    constructor(raffleRepository, cacheManager) {
        this.raffleRepository = raffleRepository;
        this.cacheManager = cacheManager;
    }
    create(raffle) {
        console.log(`raffle create: ${JSON.stringify(raffle)}`);
        return this.raffleRepository.save(raffle);
    }
    async findAllWithRedis() {
        const cachedResult = await this.cacheManager.get('findAllRaffles');
        if (cachedResult) {
            console.log(`Raffle result from Redis :D `);
            return cachedResult;
        }
        const result = await this.raffleRepository
            .createQueryBuilder('raffle')
            .leftJoinAndSelect('raffle.product', 'product')
            .leftJoinAndSelect('raffle.bid', 'bid')
            .select([
            'raffle.raffleId',
            'product.productImage',
            'product.productColor',
            'product.productModel',
            'product.productName',
            'product.releasePrice',
            'raffle.dateEnd',
            'bid.bidId'
        ])
            .orderBy('raffle.dateEnd', 'DESC')
            .addOrderBy('raffle.raffleId', 'DESC')
            .take(10)
            .getMany();
        await this.cacheManager.set('findAllRaffles', result);
        console.log(`normal result`);
        return result;
    }
    async findAll() {
        const result = await this.raffleRepository
            .createQueryBuilder('raffle')
            .leftJoinAndSelect('raffle.product', 'product')
            .leftJoinAndSelect('raffle.bid', 'bid')
            .select([
            'raffle.raffleId',
            'product.productImage',
            'product.productColor',
            'product.productModel',
            'product.productName',
            'product.releasePrice',
            'raffle.dateEnd',
            'bid.bidId'
        ])
            .orderBy('raffle.dateEnd', 'DESC')
            .addOrderBy('raffle.raffleId', 'DESC')
            .take(10)
            .getMany();
        return result;
    }
    async test() {
        const result = await this.raffleRepository
            .createQueryBuilder('raffle')
            .where((qb) => {
            const subQuery = qb
                .subQuery()
                .select('raffle.raffleId')
                .where('raffle.closedPrice > :price', { price: 200000 })
                .getQuery();
            return 'raffle.raffleId IN ' + subQuery;
        })
            .getMany();
        return result;
    }
    async findOne(id) {
        const currentRaffle = await this.raffleRepository.findOne({
            where: { raffleId: id },
            relations: {
                product: true,
                bid: true,
            },
        });
        const { product: { productId }, } = currentRaffle;
        const previousRaffle = await this.raffleRepository.find({
            where: {
                product: {
                    productId: productId,
                },
            },
        });
        const result = {
            data: currentRaffle,
            raffleHistory: previousRaffle,
        };
        return result;
    }
    async remove(raffleId) {
        await this.raffleRepository.delete({ raffleId });
    }
};
RafflesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(raffle_entity_1.RaffleEntity)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], RafflesService);
exports.RafflesService = RafflesService;
//# sourceMappingURL=raffles.service.js.map