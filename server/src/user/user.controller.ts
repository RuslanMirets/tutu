import { ValidationPipe } from './../pipes/validation.pipe';
import { RoleGuard } from './../auth/role.guard';
import { Role } from './../auth/role-auth.decorator';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
