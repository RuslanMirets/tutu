import { RoleModel } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RoleService {
  constructor(@InjectModel(RoleModel) private roleRepository: typeof RoleModel) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }
}
