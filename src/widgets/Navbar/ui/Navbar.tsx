import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const handleCloseAuthModal = useCallback(() => setOpenAuthModal(false), []);
  const handleOpenAuthModal = useCallback(() => setOpenAuthModal(true), []);
  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Button
          className={styles.links}
          theme={ThemeButton.OUTLINE}
          onClick={handleLogout}
        >
          {t('Выйти')}
        </Button>

        <LoginModal isOpen={openAuthModal} onClose={handleCloseAuthModal} />
      </div>
    );
  }
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ThemeButton.OUTLINE}
        onClick={handleOpenAuthModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal isOpen={openAuthModal} onClose={handleCloseAuthModal} />
    </div>
  );
};
