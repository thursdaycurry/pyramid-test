import { Strategy } from 'passport-jwt';
import { UsersService } from '../users.service';
import { JwtPayloadDto } from './jwtPayload.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: JwtPayloadDto): Promise<import("../entities/user.entity").UserEntity>;
}
export {};
