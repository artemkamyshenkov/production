import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input/Input';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import {
  getPassword,
  getUserError,
  getUsername,
  getuserIsLoading,
} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}
const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const error = useSelector(getUserError);
  const isLoading = useSelector(getuserIsLoading);
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
    <DynamicModuleLoader name="loginForm" reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
