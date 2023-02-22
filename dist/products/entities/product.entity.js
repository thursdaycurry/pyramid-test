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
exports.ProductEntity = void 0;
const raffle_entity_1 = require("../../raffles/entities/raffle.entity");
const swagger_1 = require("@nestjs/swagger");
const common_entities_1 = require("../../common/entities/common.entities");
const typeorm_1 = require("typeorm");
let ProductEntity = class ProductEntity extends common_entities_1.CommonEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Products're Primary key called: productsId [AutoCreate]`,
        required: true,
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ProductEntity.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product Image Url join AWS-S3` }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "productImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product unique data for commercial purpose` }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "productModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product title`, required: true }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product reg Size` }),
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "productSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product Size` }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "productColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product Category` }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "productCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Product original Price` }),
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "releasePrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: `Products released date` }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => raffle_entity_1.RaffleEntity, raffle => raffle.product, {}),
    (0, typeorm_1.JoinColumn)({ name: 'raffleId' }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "raffle", void 0);
ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Products' })
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map