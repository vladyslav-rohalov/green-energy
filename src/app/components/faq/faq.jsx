'use client';

import { useState } from 'react';
import AccordionItem from './accordion/item/item';
import IconDot from '@/app/utils/svg/dot';
import { accordionData } from './accordion/data';
import styles from './faq.module.css';
import Link from 'next/link';

export default function Faq() {
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState(false);

  const handleOpen = index => {
    setOpen(index);
  };

  return (
    <section className="section" id="faq">
      <div className={styles.container_mobile}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            open={open}
            handleOpen={handleOpen}
          />
        ))}

        <p className={styles.text}>
          Didn&apos;t find the answer to your question?{' '}
        </p>
        <button className={styles.btn}>
          Contact Us <IconDot />
        </button>
      </div>
      <div className={styles.container_tablet}>
        <div className={styles.column}>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
        <div className={styles.column}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <div className={styles.container_btn}>
            <p className={styles.text}>
              Didn&apos;t find the answer to your question?
            </p>
            <Link href={'#contact'}>
              <button
                className={styles.btn}
                onMouseMove={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Contact Us <IconDot color={hover ? '#97d28b' : '#173d33'} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
