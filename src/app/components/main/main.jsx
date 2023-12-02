import Link from 'next/link';
import Image from 'next/image';
import IconArrow from '@/app/utils/svg/arrow';
import Divider from '../common/divider/divider';
import styles from './main.module.css';

export default function Main() {
  return (
    <section className="section" id="main">
      <div className={styles.continer}>
        <div className={styles.container_title}>
          <h1 className={styles.title}>RENEWABLE ENERGY For any task</h1>
        </div>

        <div className={styles.container_info}>
          <p className={styles.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <Link href={'#cases'}>
            <button className={styles.button}>
              Learn more
              <span className={styles.icon_span}>
                <IconArrow />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <Divider />

      <div className={styles.contacts_container}>
        <div className={styles.contacts_container_address}>
          <p className={styles.contacts}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
        </div>

        <div className={styles.contacts_container_mail}>
          <p className={`${styles.contacts} ${styles.email}`}>
            office@ecosolution.com
          </p>
          <p className={`${styles.contacts} ${styles.copyright}`}>
            ecosolution © 2023
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
