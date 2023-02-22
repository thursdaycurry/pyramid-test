"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFIlter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFIlter = class HttpExceptionFIlter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        const status = exception.getStatus();
        const error = exception.getResponse();
        if (typeof error === 'string') {
            res.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: req.url,
                error: error,
            });
        }
        else {
            res.status(status).json(Object.assign(Object.assign({}, error), { timestamp: new Date().toISOString() }));
        }
    }
};
HttpExceptionFIlter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFIlter);
exports.HttpExceptionFIlter = HttpExceptionFIlter;
//# sourceMappingURL=exception.filter.js.map