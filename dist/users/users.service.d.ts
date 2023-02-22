import { UserLoginDto } from './dto/login.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    login(userLoginDto: UserLoginDto): Promise<{
        token: string;
        userId: string;
    }>;
    validate(usersId: any): Promise<UserEntity>;
}
