'use client';

import { useState } from 'react';
import AccordionItem from './accordion/item/item';
import IconDot from '@/app/utils/svg/dot';
import { accordionData } from './accordion/data';
import styles from './faq.module.css';

export default function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = index => {
    setOpen(index);
  };

  return (
    <section className={styles.faq_section}>
      <h2 className={styles.faq_title}>Frequently Asked Questions</h2>
      {accordionData.map((item, index) => {
        return (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            open={open}
            handleOpen={handleOpen}
          />
        );
      })}
      <p className={styles.faq_text}>
        Didn't find the answer to your question?{' '}
      </p>
      <button className={styles.faq_btn}>
        Contact Us <IconDot />
      </button>
    </section>
  );
}
