import { UsersService } from './users.service';
import { UserLoginDto } from './dto/login.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(userLoginDto: UserLoginDto, res: Response): Promise<void>;
}
