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
exports.RafflesController = void 0;
const common_1 = require("@nestjs/common");
const raffles_service_1 = require("./raffles.service");
let RafflesController = class RafflesController {
    constructor(rafflesService) {
        this.rafflesService = rafflesService;
        this.findAllcount = 0;
        this.logger = new common_1.Logger('raffels');
    }
    create(createRaffleDto) {
        return this.rafflesService.create(createRaffleDto);
    }
    findAll() {
        this.findAllcount++;
        this.logger.log(`컨트롤러 findAll ${this.findAllcount}번 요청됨`);
        return this.rafflesService.findAll();
    }
    test() {
        return this.rafflesService.test();
    }
    findOne(id) {
        return this.rafflesService.findOne(id);
    }
    remove(id) {
        return this.rafflesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RafflesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RafflesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RafflesController.prototype, "test", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RafflesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RafflesController.prototype, "remove", null);
RafflesController = __decorate([
    (0, common_1.Controller)('raffles'),
    __metadata("design:paramtypes", [raffles_service_1.RafflesService])
], RafflesController);
exports.RafflesController = RafflesController;
//# sourceMappingURL=raffles.controller.js.map