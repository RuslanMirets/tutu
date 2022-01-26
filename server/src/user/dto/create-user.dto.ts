import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly firstName: string;

  @IsString({ message: 'Должно быть строкой' })
  readonly lastName: string;

  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Пароль не должен быть меньше 4 и больше 16 символов' })
  readonly password: string;
}
