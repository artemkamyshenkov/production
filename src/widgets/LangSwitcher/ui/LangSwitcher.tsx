import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './langSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
