'use client';

import { useState, useEffect } from 'react';
import styles from './electrocity.module.css';

export default function Electrocity() {
  const [value, setValue] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedNumber = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <section className="section" id="electrocity">
      <h2 className={styles.electro_title}>
        Electricity we produced for all time
      </h2>
      <div className={styles.electro_divider}></div>
      <span className={styles.electro_counter}>
        {formattedNumber}
        <p className={styles.electro_counter_prefix}>kWh</p>
      </span>
    </section>
  );
}
