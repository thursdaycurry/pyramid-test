import { UserEntity } from '../entities/user.entity';
declare const UserLoginDto_base: import("@nestjs/common").Type<Pick<UserEntity, "userId" | "password">>;
export declare class UserLoginDto extends UserLoginDto_base {
}
export {};
