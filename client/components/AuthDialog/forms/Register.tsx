import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Регистрация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="firstName" label="Имя" type="text" />
        <FormField name="lastName" label="Фамилия" type="text" />
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        <div className="d-flex justify-between align-center">
          <div className="d-flex align-center">
            Есть аккаунт?
            <Button className="ml-10" onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!form.formState.isValid}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
