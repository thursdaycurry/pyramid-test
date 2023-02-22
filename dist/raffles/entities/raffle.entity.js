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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaffleEntity = void 0;
const user_entity_1 = require("./../../users/entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
const common_entities_1 = require("../../common/entities/common.entities");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/entities/product.entity");
const bid_entity_1 = require("../../bids/entities/bid.entity");
let RaffleEntity = class RaffleEntity extends common_entities_1.CommonEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Raffles're Primary key called: rafflesId [AutoCreate]`,
        required: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], RaffleEntity.prototype, "raffleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `raffle event start date` }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], RaffleEntity.prototype, "dateStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `raffle event end date` }),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], RaffleEntity.prototype, "dateEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `whether this raffle is closed or not` }),
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], RaffleEntity.prototype, "isClosed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `final price of this raffle`,
        required: true,
    }),
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], RaffleEntity.prototype, "closedPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User 테이블 외래키',
    }),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], RaffleEntity.prototype, "usersId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Products 테이블 외래키',
    }),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], RaffleEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.raffle),
    (0, typeorm_1.JoinColumn)({ name: 'usersId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], RaffleEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, product => product.raffle, {}),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], RaffleEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bid_entity_1.BidEntity, bid => bid.raffle, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'bidId' }),
    __metadata("design:type", Array)
], RaffleEntity.prototype, "bid", void 0);
RaffleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Raffle' })
], RaffleEntity);
exports.RaffleEntity = RaffleEntity;
//# sourceMappingURL=raffle.entity.js.map