import { useState } from 'react';
import Image from 'next/image';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './card.module.css';

export default function SwiperCard({ item, priority }) {
  const [hover, setHover] = useState(false);

  const { url, title, description, date } = item;
  return (
    <div className={styles.swiper_card}>
      <div className={styles.swiper_card_img_container}>
        <Image
          src={url}
          alt={description}
          sizes="100%"
          fill
          priority={priority}
        />
      </div>
      <div className={styles.swiper_card_content}>
        <div className={styles.swiper_card_row}>
          <p className={styles.swiper_card_title}>{title}</p>
          <button
            className={styles.swiper_card_btn}
            style={{ backgroundColor: hover ? '#173D33' : '#97D28B' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <IconArrow
              width={28}
              height={28}
              rotate={-45}
              color={hover ? '#97D28B' : '#173D33'}
            />
          </button>
        </div>
        <div className={styles.swiper_card_divider}></div>
        <div className={styles.swiper_card_row}>
          <p className={styles.swiper_card_text}>{description}</p>
          <p className={styles.swiper_card_text}>{date}</p>
        </div>
      </div>
    </div>
  );
}
