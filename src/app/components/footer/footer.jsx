import Logo from '../header/logo/logo';
import IconArrow from '@/app/utils/svg/arrow';
import { IconFacebook, IconInstagram } from '@/app/utils/svg/social';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_divider}></div>
      <div className={styles.footer_row}>
        <Logo />
        <button className={styles.footer_btn}>
          <IconArrow width={16} height={16} rotate={-90} />
        </button>
      </div>
      <div className={styles.footer_social}>
        <a href={'https://www.facebook.com/'}>
          <IconFacebook />
        </a>

        <a href={'https://www.instagram.com/'}>
          <IconInstagram />
        </a>
      </div>
      <div className={styles.footer_contacts}>
        <p className={styles.footer_text}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <p className={styles.footer_text}>office@ecosolution.com</p>
        <p className={styles.footer_text}>ecosolution © 2023</p>
      </div>
    </footer>
  );
}
