import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Авторизация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        <div className="d-flex justify-between align-center">
          <div className="d-flex">
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!form.formState.isValid}>
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
