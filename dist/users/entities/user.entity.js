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
exports.UserEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const bid_entity_1 = require("../../bids/entities/bid.entity");
const common_entities_1 = require("../../common/entities/common.entities");
const raffle_entity_1 = require("../../raffles/entities/raffle.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity extends common_entities_1.CommonEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Users're Primary Key called: usersId [AutoCreate]`,
        required: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserEntity.prototype, "usersId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `User ID`,
        required: true,
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `User Password`,
        required: true,
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => raffle_entity_1.RaffleEntity, raffle => raffle.user, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'raffleId' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "raffle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bid_entity_1.BidEntity, bid => bid.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "bid", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'User' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map