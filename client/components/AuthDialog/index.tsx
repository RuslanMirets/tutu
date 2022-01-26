import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  open: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, open }) => {
  const [formType, setFormType] = React.useState<'login' | 'register'>('login');

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
        {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
      </DialogContent>
    </Dialog>
  );
};
