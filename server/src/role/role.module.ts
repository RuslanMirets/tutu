import { UserRoleModel } from './user-role.model';
import { UserModel } from './../user/user.model';
import { RoleModel } from './role.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRoleModel])],
  exports: [RoleService],
})
export class RoleModule {}
