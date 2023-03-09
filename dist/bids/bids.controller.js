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
exports.BidsController = void 0;
const common_1 = require("@nestjs/common");
const bids_service_1 = require("./bids.service");
let BidsController = class BidsController {
    constructor(bidsService) {
        this.bidsService = bidsService;
        this.createBidCount = 0;
        this.logger = new common_1.Logger('bids');
    }
    create(bid) {
        this.createBidCount++;
        this.logger.log(`${this.createBidCount}번째 입찰 등록`);
        return this.bidsService.create(bid);
    }
    findAll() {
        this.logger.log('findAll is triggered');
        return this.bidsService.findAll();
    }
    async findBySize(size) {
        this.logger.log('size logger is triggered');
        return await this.bidsService.findBySize(size);
    }
    async findByRange(sizeFrom, sizeTo) {
        this.logger.log('findByRange logger is triggered');
        return await this.bidsService.findByRange(sizeFrom, sizeTo);
    }
    remove(id) {
        return this.bidsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BidsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BidsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':size'),
    __param(0, (0, common_1.Param)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BidsController.prototype, "findBySize", null);
__decorate([
    (0, common_1.Get)('range/:sizeFrom/:sizeTo'),
    __param(0, (0, common_1.Param)('sizeFrom')),
    __param(1, (0, common_1.Param)('sizeTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BidsController.prototype, "findByRange", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BidsController.prototype, "remove", null);
BidsController = __decorate([
    (0, common_1.Controller)('bids'),
    __metadata("design:paramtypes", [bids_service_1.BidsService])
], BidsController);
exports.BidsController = BidsController;
//# sourceMappingURL=bids.controller.js.map