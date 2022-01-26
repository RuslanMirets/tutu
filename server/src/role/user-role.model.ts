import { RoleModel } from './role.model';
import { UserModel } from './../user/user.model';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'UserRole', createdAt: false, updatedAt: false })
export class UserRoleModel extends Model<UserRoleModel> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => RoleModel)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}
