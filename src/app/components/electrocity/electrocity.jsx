import styles from './electrocity.module.css';

export default function Electrocity() {
  return (
    <section className={styles.electro_section}>
      <h2 className={styles.electro_title}>
        Electricity we produced for all time
      </h2>
      <div className={styles.electro_divider}></div>
      <span className={styles.electro_counter}>
        1.134.147.814 <p className={styles.electro_counter_prefix}>kWh</p>
      </span>
    </section>
  );
}
