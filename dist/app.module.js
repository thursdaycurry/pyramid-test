"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./products/products.controller");
const raffles_controller_1 = require("./raffles/raffles.controller");
const users_controller_1 = require("./users/users.controller");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("./config/orm.config");
const products_module_1 = require("./products/products.module");
const app_controller_1 = require("./app.controller");
const raffles_module_1 = require("./raffles/raffles.module");
const bids_module_1 = require("./bids/bids.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync(orm_config_1.typeOrmConfigAsync),
            raffles_module_1.RaffleModule,
            users_module_1.UsersModule,
            products_module_1.ProductModule,
            bids_module_1.BidsModule,
        ],
        controllers: [products_controller_1.ProductsController, raffles_controller_1.RafflesController, users_controller_1.UsersController, app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map