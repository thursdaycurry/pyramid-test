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
exports.BidEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_entities_1 = require("../../common/entities/common.entities");
const raffle_entity_1 = require("../../raffles/entities/raffle.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let BidEntity = class BidEntity extends common_entities_1.CommonEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Bids're Primary key called: bidsId [AutoCreate]`,
        required: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BidEntity.prototype, "bidId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Biding shoes size`, required: true }),
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], BidEntity.prototype, "bidSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Bid price`, required: true }),
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], BidEntity.prototype, "bidPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Bid Quantity`, required: true }),
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], BidEntity.prototype, "bidQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => raffle_entity_1.RaffleEntity, raffle => raffle.bid),
    (0, typeorm_1.JoinColumn)({ name: 'raffleId' }),
    __metadata("design:type", raffle_entity_1.RaffleEntity)
], BidEntity.prototype, "raffle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.bid),
    (0, typeorm_1.JoinColumn)({ name: 'usersId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], BidEntity.prototype, "user", void 0);
BidEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Bid' })
], BidEntity);
exports.BidEntity = BidEntity;
//# sourceMappingURL=bid.entity.js.map