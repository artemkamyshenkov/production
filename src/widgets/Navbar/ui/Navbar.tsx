import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleAuthModalOpen = useCallback(
    () => setOpenAuthModal((prev) => !prev),
    [],
  );
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ThemeButton.OUTLINE}
        onClick={handleAuthModalOpen}
      >
        {t('Войти')}
      </Button>

      <Modal isOpen={openAuthModal} onClose={handleAuthModalOpen}>
        {t(' Lorem ipsum dolor sit amet consectetur adipisicing elit.')}
      </Modal>
    </div>
  );
};
