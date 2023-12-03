'use client';
import { useState } from 'react';
import { IconPhone, IconMail, IconMap } from '@/app/utils/svg/contacts';
import Social from './social/social';
import FeedbackForm from './feedbackForm/feedbackForm';
import styles from './contacts.module.css';

export default function Conatacts() {
  const [hover, setHover] = useState(null);

  return (
    <section className="section" id="contact">
      <h2 className={styles.title}>Contact us</h2>
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.subtitle}>Phone:</p>
          <div className={styles.row}>
            <a
              href="tel:+380981234567"
              className={styles.link}
              onMouseEnter={() => setHover('phone1')}
              onMouseLeave={() => setHover(null)}
            >
              <IconPhone color={hover === 'phone1' ? '#97D28B' : '#173D33'} />
              38 (098) 12 34 567
            </a>
          </div>
          <div className={`${styles.row} ${styles.margin}`}>
            <a
              href="tel:+380981234567"
              className={styles.link}
              onMouseEnter={() => setHover('phone2')}
              onMouseLeave={() => setHover(null)}
            >
              <IconPhone color={hover === 'phone2' ? '#97D28B' : '#173D33'} />
              38 (098) 12 34 567
            </a>
          </div>
          <p className={styles.subtitle}>E-mail:</p>
          <div className={styles.row}>
            <a
              href="mailto:office@ecosolution.com"
              className={styles.link}
              onMouseEnter={() => setHover('mail')}
              onMouseLeave={() => setHover(null)}
            >
              <IconMail color={hover === 'mail' ? '#97D28B' : '#173D33'} />
              office@ecosolution.com
            </a>
          </div>
          <p className={styles.subtitle}>Address:</p>
          <div className={styles.row}>
            <a
              href="https://maps.app.goo.gl/PnT7SeJ2Q4UdqRin6"
              target="_blank"
              className={styles.link}
              onMouseEnter={() => setHover('map')}
              onMouseLeave={() => setHover(null)}
            >
              <IconMap color={hover === 'map' ? '#97D28B' : '#173D33'} />
              79005, Ukraine, Lviv, street Shota Rustaveli, 7
            </a>
          </div>
          <p className={styles.subtitle}> Social Networks:</p>
          <Social />
        </div>
        <div className={styles.column}>
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}
