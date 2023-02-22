"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const common_1 = require("@nestjs/common");
exports.getUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.user)
        return request.user;
    else
        null;
});
//# sourceMappingURL=users.Data.Decorator.js.map