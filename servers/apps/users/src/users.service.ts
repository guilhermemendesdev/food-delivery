import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prisma:
    private readonly configService: ConfigService,
  ) {}

  //Register User
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  //Login Service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    };
    return user;
  }

  //Get all user service
  async getUsers() {
    const users = [
      {
        id: '123',
        name: 'test',
        email: 'abc@gmail.com',
        password: '123456f78',
      },
    ];
    return users;
  }
}
