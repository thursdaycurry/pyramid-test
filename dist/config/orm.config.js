"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'postgres',
            host: configService.get('RDS_HOST'),
            port: configService.get('RDS_PORT'),
            username: configService.get('RDS_USERNAME'),
            password: configService.get('RDS_PASSWORD'),
            database: configService.get('RDS_DATABASE_NAME'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
            logging: false,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=orm.config.js.map