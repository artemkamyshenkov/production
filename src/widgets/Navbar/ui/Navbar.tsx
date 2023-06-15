import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { AppLickTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
        <AppLink
          to={'/'}
          className={classNames(styles.mainLink, {}, [className])}
          theme={AppLickTheme.SECONDARY}
        >
          {t('Главная')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLickTheme.SECONDARY}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
