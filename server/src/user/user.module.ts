import { RoleModule } from './../role/role.module';
import { UserRoleModel } from './../role/user-role.model';
import { RoleModel } from './../role/role.model';
import { UserModel } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([UserModel, RoleModel, UserRoleModel]), RoleModule],
})
export class UserModule {}
