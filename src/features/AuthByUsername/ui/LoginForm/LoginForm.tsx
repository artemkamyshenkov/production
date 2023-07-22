import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        className={styles.input}
        placeholder="Введите имя пользователя"
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={styles.input}
        placeholder="Введите пароль"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        className={styles.btn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
