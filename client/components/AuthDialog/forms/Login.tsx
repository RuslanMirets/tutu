import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { BtnBlue } from '../../Buttons/BtnBlue';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Авторизация</h2>
      <form>
        <FormField name="email" label="Email" />
        <FormField name="password" label="Пароль" />
        <div className="d-flex justify-between align-center">
          <div className="d-flex">
            <div className="ml-10 cu-p" onClick={onOpenRegister}>
              Регистрация
            </div>
          </div>
          <BtnBlue>Войти</BtnBlue>
        </div>
      </form>
    </FormProvider>
  );
};
