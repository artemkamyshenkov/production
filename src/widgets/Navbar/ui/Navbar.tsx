import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleCloseAuthModal = useCallback(() => setOpenAuthModal(false), []);
  const handleOpenAuthModal = useCallback(() => setOpenAuthModal(true), []);
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
