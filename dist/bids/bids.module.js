"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidsModule = void 0;
const common_1 = require("@nestjs/common");
const bids_controller_1 = require("./bids.controller");
const bids_service_1 = require("./bids.service");
const bid_entity_1 = require("./entities/bid.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BidsModule = class BidsModule {
};
BidsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bid_entity_1.BidEntity])],
        controllers: [bids_controller_1.BidsController],
        providers: [bids_service_1.BidsService],
    })
], BidsModule);
exports.BidsModule = BidsModule;
//# sourceMappingURL=bids.module.js.map