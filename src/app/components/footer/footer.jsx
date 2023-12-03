'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../header/logo/logo';
import IconArrow from '@/app/utils/svg/arrow';
import { IconFacebook, IconInstagram } from '@/app/utils/svg/social';
import Divider from '../common/divider/divider';
import styles from './footer.module.css';

export default function Footer() {
  const [hover, setHover] = useState(false);
  return (
    <footer className="section" id="footer">
      <Divider />
      <div className={styles.container}>
        <div className={styles.column}>
          <Logo />
        </div>

        <div className={styles.column}>
          <div className={styles.social_tablet}>
            <a href={'https://www.facebook.com/'}>
              <IconFacebook />
            </a>

            <a href={'https://www.instagram.com/'}>
              <IconInstagram />
            </a>
          </div>
          <Link href={'#main'}>
            <button
              className={styles.btn}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <IconArrow
                width={16}
                height={16}
                rotate={-90}
                color={hover ? '#97d28b' : '#173d33'}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.social_mobile}>
        <a href={'https://www.facebook.com/'}>
          <IconFacebook />
        </a>

        <a href={'https://www.instagram.com/'}>
          <IconInstagram />
        </a>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contacts_column}>
          <p className={styles.text}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
        </div>
        <div className={styles.contacts_column}>
          <p className={styles.text}>office@ecosolution.com</p>
          <p className={styles.text}>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
}
