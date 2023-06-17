import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => (
  <button
    type="button"
    className={classNames(styles.Button, {}, [className, styles[theme]])}
    {...props}
  >
    {children}
  </button>
);

export default Button;
