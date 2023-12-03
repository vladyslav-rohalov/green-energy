'use client';
import { useState, useEffect } from 'react';
import Logo from './logo/logo';
import BurgerMenu from './burgerMenu/burgerMenu';
import GetInTouch from './getInTouch/getInTouch';
import Modal from '../modal/modal';
import MobileMenu from '../mobileMenu/mobileMenu';
import styles from './header.module.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolled(true);
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setIsScrolled(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.header_container}>
          <Logo />
          <div className={styles.header_row}>
            <BurgerMenu handleMobile={() => setMobileOpen(true)} />
            <GetInTouch />
          </div>
        </div>
      </header>
      {mobileOpen && (
        <Modal onClose={() => setMobileOpen(false)}>
          <MobileMenu onClose={() => setMobileOpen(false)} />
        </Modal>
      )}
    </>
  );
}
