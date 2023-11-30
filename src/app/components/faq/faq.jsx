'use client';

import { useState } from 'react';
import AccordionItem from './accordion/item/item';
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
            item={item}
            index={index}
            open={open}
            handleOpen={handleOpen}
          />
        );
      })}
    </section>
  );
}
