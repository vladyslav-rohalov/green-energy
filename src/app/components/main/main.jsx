import Image from 'next/image';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './main.module.css';

export default function Main() {
  return (
    <section className={styles.main_container} id="main">
      <h1 className={styles.text_left}>RENEWABLE ENERGY For any task</h1>
      <div className={styles.right_container}>
        <p className={styles.text_right}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <button className={styles.btn_more}>
          Learn more
          {
            <span className={styles.icon_span}>
              <IconArrow />
            </span>
          }
        </button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.contacts_container}>
        <p className={styles.contacts}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <div>
          <p className={`${styles.contacts} ${styles.email}`}>
            office@ecosolution.com
          </p>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          src={'/wind-turbine-clean-energy.jpg'}
          alt="Wind turbines"
          priority
          sizes="100%"
          fill
        />
      </div>
    </section>
  );
}
