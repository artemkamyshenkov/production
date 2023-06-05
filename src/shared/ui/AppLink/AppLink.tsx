import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLickTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLickTheme;
}
export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLickTheme.PRIMARY,
}) => {
  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};
