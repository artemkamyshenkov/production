import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { AppLickTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar)}>
      <div className={classNames(styles.links)}>
        <AppLink
          to={'/'}
          className={classNames(styles.mainLink, {}, [className])}
          theme={AppLickTheme.SECONDARY}
        >
          Главная
        </AppLink>
        <AppLink to={'/about'} theme={AppLickTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
