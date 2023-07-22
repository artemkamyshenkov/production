import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

export const Text: React.FC<TextProps> = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}) => (
  <div
    className={classNames(styles.Text, { [styles[theme]]: true }, [className])}
  >
    {title && <p>{title}</p>}
    {text && <p>{text}</p>}
  </div>
);
