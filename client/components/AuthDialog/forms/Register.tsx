import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { BtnBlue } from '../../Buttons/BtnBlue';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Регистрация</h2>
      <form>
        <FormField name="firstName" label="Имя" />
        <FormField name="lastName" label="Фамилия" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Пароль" />
        <div className='d-flex justify-between align-center'>
          <div className="d-flex">
            Есть аккаунт?
            <div className="ml-10 cu-p" onClick={onOpenLogin}>
              Войти
            </div>
          </div>
          <BtnBlue>Зарегистрироваться</BtnBlue>
        </div>
      </form>
    </FormProvider>
  );
};
