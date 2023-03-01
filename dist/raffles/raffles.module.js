"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaffleModule = void 0;
const common_1 = require("@nestjs/common");
const raffles_service_1 = require("./raffles.service");
const raffles_controller_1 = require("./raffles.controller");
const typeorm_1 = require("@nestjs/typeorm");
const raffle_entity_1 = require("./entities/raffle.entity");
const user_entity_1 = require("../users/entities/user.entity");
const bid_entity_1 = require("../bids/entities/bid.entity");
const raffles_gateway_1 = require("./raffles.gateway");
const redisStore = require("cache-manager-ioredis");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
let RaffleModule = class RaffleModule {
};
RaffleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([raffle_entity_1.RaffleEntity, user_entity_1.UserEntity, bid_entity_1.BidEntity, user_entity_1.UserEntity]),
            common_1.CacheModule.register({
                store: redisStore,
                host: 'localhost',
                port: 6379,
                max: 100,
                ttl: 1200,
            }),
            nestjs_redis_1.RedisModule.forRoot({
                config: {
                    host: 'redis-12904.c82.us-east-1-2.ec2.cloud.redislabs.com',
                    port: 12904,
                    password: 'vLKsv485qBQNjEOP4tLBMV78Xr2jNC3S'
                }
            })
        ],
        controllers: [raffles_controller_1.RafflesController],
        providers: [raffles_service_1.RafflesService, raffles_gateway_1.RafflesGateway],
        exports: [raffles_service_1.RafflesService],
    })
], RaffleModule);
exports.RaffleModule = RaffleModule;
//# sourceMappingURL=raffles.module.js.map