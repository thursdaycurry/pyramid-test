"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../entities/user.entity");
class UserLoginDto extends (0, swagger_1.PickType)(user_entity_1.UserEntity, ['userId', 'password']) {
}
exports.UserLoginDto = UserLoginDto;
//# sourceMappingURL=login.dto.js.map