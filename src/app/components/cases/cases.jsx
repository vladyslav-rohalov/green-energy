import IconArrow from '@/app/utils/svg/arrow';
import SwiperList from './swiperList/swiperList';
import styles from './cases.module.css';

export default function Cases() {
  return (
    <section className={styles.cases_section}>
      <h2 className={styles.cases_title}>Successful cases of our company</h2>
      <div className={styles.cases_navigate}>
        <p className={styles.cases_pointer}>
          01<span className={styles.cases_pointer_span}>/05</span>
        </p>
        <div className={styles.cases_navigate_btn_container}>
          <button className={styles.cases_navigate_btn}>
            <IconArrow width={36} height={36} rotate={180} />
          </button>
          <button className={styles.cases_navigate_btn}>
            <IconArrow width={36} height={36} />
          </button>
        </div>
      </div>
      <SwiperList />
    </section>
  );
}
