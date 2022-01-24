import { UserRoleModel } from './user-role.model';
import { UserModel } from './../user/user.model';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'Role' })
export class RoleModel extends Model<RoleModel, RoleCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => UserModel, () => UserRoleModel)
  user: UserModel[]
}
