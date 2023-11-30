'use client';
import { IconPhone, IconMail, IconMap } from '@/app/utils/svg/contacts';
import { IconFacebook, IconInstagram } from '@/app/utils/svg/social';
import FeedbackForm from './feedbackForm/feedbackForm';
import styles from './contacts.module.css';

export default function Conatacts() {
  return (
    <section className={styles.contacts_section}>
      <h2 className={styles.contacts_title}>Contact us</h2>
      <h3 className={styles.contacts_subtitle}>Phone:</h3>
      <div className={styles.contacts_row}>
        <IconPhone />
        <p className={styles.contacts_text}>38 (098) 12 34 567</p>
      </div>
      <div className={`${styles.contacts_row} ${styles.contacts_margin}`}>
        <IconPhone />
        <p className={styles.contacts_text}>38 (098) 12 34 567</p>
      </div>
      <h3 className={styles.contacts_subtitle}>E-mail:</h3>
      <div className={styles.contacts_row}>
        <IconMail />
        <p className={styles.contacts_text}>office@ecosolution.com</p>
      </div>
      <h3 className={styles.contacts_subtitle}>Address:</h3>
      <div className={styles.contacts_row}>
        <IconMap />
        <p className={styles.contacts_text}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
      </div>
      <h3 className={styles.contacts_subtitle}> Social Networks:</h3>
      <div className={styles.contacts_row}>
        <a
          className={styles.contacts_social_container}
          href={'https://www.facebook.com/'}
        >
          <IconFacebook />
        </a>

        <a
          className={styles.contacts_social_container}
          href={'https://www.instagram.com/'}
        >
          <IconInstagram />
        </a>
      </div>
      <FeedbackForm />
    </section>
  );
}
