import { UserRoleModel } from './../role/user-role.model';
import { RoleModel } from './../role/role.model';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'User' })
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => RoleModel, () => UserRoleModel)
  role: RoleModel[];
}
