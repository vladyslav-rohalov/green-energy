'use client';

import { useState, useRef } from 'react';
import IconArrow from '@/app/utils/svg/arrow';
import SwiperList from './swiperList/swiperList';
import styles from './cases.module.css';

export default function Cases() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [prevBtnColor, setPrevBtnColor] = useState('#173d33');
  const [nextBtnColor, setNextBtnColor] = useState('#173d33');

  const swiperRef = useRef();

  const handlePrev = () => {
    const swiper = swiperRef.current?.swiper;
    swiper.slidePrev();
    setCurrentSlide(swiper.realIndex + 1);
  };

  const handleNext = () => {
    const swiper = swiperRef.current?.swiper;
    swiper.slideNext();
    setCurrentSlide(swiper.realIndex + 1);
  };

  return (
    <section className="section" id="cases">
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>Successful cases of our company</h2>
        </div>
        <div className={styles.vertical_divider}></div>
        <div className={styles.navigate}>
          <p className={styles.pointer}>
            0{currentSlide}
            <span className={styles.pointer_span}>/05</span>
          </p>
          <div className={styles.navigate_btn_container}>
            <button
              className={styles.navigate_btn}
              style={{ borderColor: prevBtnColor }}
              onClick={handlePrev}
              onMouseEnter={() => setPrevBtnColor('#97d28b')}
              onMouseLeave={() => setPrevBtnColor('#173d33')}
            >
              <IconArrow
                width={36}
                height={36}
                rotate={180}
                color={prevBtnColor}
              />
            </button>
            <button
              className={styles.navigate_btn}
              style={{ borderColor: nextBtnColor }}
              onClick={handleNext}
              onMouseEnter={() => setNextBtnColor('#97d28b')}
              onMouseLeave={() => setNextBtnColor('#173d33')}
            >
              <IconArrow width={36} height={36} color={nextBtnColor} />
            </button>
          </div>
        </div>
      </div>

      <SwiperList swiperRef={swiperRef} />
    </section>
  );
}
