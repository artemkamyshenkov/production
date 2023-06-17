import React from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import styles from './ThemeSwither.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
