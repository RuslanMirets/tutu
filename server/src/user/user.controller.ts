import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
