import Image from 'next/image';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './card.module.css';

export default function SwiperCard({ url, title, description, date }) {
  return (
    <li className={styles.swiper_card}>
      <div className={styles.swiper_card_img_container}>
        <Image src={url} alt="asd" sizes="100%" fill />
      </div>
      <div className={styles.swiper_card_content}>
        <div className={styles.swiper_card_row}>
          <p className={styles.swiper_card_title}>{title}</p>
          <button className={styles.swiper_card_btn}>
            <IconArrow width={28} height={28} rotate={-45} />
          </button>
        </div>
        <div className={styles.swiper_card_divider}></div>
        <div className={styles.swiper_card_row}>
          <p className={styles.swiper_card_descripton}>{description}</p>
          <p className={styles.swiper_card_descripton}>{date}</p>
        </div>
      </div>
    </li>
  );
}
