import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: React.FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const handlePageReload = () => {
    // eslint-disable-next-line  no-restricted-globals
    location.reload();
  };
  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      {t('Произошла непредвиденная ошибка')}
      <Button onClick={handlePageReload}>{t('Обновить страницу')}</Button>
    </div>
  );
};
