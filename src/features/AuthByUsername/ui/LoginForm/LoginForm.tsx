import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        className={styles.input}
        placeholder="Введите имя пользователя"
        autofocus
      />
      <Input className={styles.input} placeholder="Введите пароль" />
      <Button className={styles.btn}>{t('Войти')}</Button>
    </div>
  );
};
