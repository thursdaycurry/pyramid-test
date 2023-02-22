"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
const exception_filter_1 = require("./common/exceptions/exception.filter");
const fs = require("fs");
async function bootstrap() {
    const logger = new common_1.Logger();
    const isLocal = true;
    const httpsOptions = isLocal
        ? null
        : {
            key: fs.readFileSync('/etc/letsencrypt/live/prachang.shop/privkey.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/prachang.shop/cert.pem'),
        };
    const app = isLocal
        ? await core_1.NestFactory.create(app_module_1.AppModule)
        : await core_1.NestFactory.create(app_module_1.AppModule, {
            httpsOptions,
        });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFIlter());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('실전프로젝트')
        .setDescription('stock ')
        .setVersion('1.0.0')
        .addTag('stockX')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api-docs', app, swaggerDocument);
    app.enableCors({
        origin: true,
        credentials: true,
        exposedHeaders: ['Authorization', 'RefreshToken'],
    });
    if (isLocal)
        await app.listen(process.env.HTTP_PORT, () => {
            common_1.Logger.log(`${process.env.HTTP_PORT} 포트 실행 HTTP`);
        });
    if (!isLocal)
        await app.listen(process.env.HTTPS_PORT, () => {
            common_1.Logger.log(`${process.env.HTTPS_PORT} 포트 실행 hTTPS`);
        });
}
bootstrap();
//# sourceMappingURL=main.js.map