'use client';
import { IconPhone, IconMail, IconMap } from '@/app/utils/svg/contacts';
import Social from './social/social';
import FeedbackForm from './feedbackForm/feedbackForm';
import styles from './contacts.module.css';

export default function Conatacts() {
  return (
    <section className="section" id="contact">
      <h2 className={styles.title}>Contact us</h2>
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.subtitle}>Phone:</p>
          <div className={styles.row}>
            <IconPhone />
            <p className={styles.text}>38 (098) 12 34 567</p>
          </div>
          <div className={`${styles.row} ${styles.margin}`}>
            <IconPhone />
            <p className={styles.text}>38 (098) 12 34 567</p>
          </div>
          <p className={styles.subtitle}>E-mail:</p>
          <div className={styles.row}>
            <IconMail />
            <p className={styles.text}>office@ecosolution.com</p>
          </div>
          <p className={styles.subtitle}>Address:</p>
          <div className={styles.row}>
            <IconMap />
            <p className={styles.text}>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </p>
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
