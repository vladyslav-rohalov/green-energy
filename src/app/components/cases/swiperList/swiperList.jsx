'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from '../card/card';
import { cardData } from '../card/data';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function SwiperList({ swiperRef }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const getWindowWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  const setPriority = index => {
    if (index === 0) return true;
    if (index === 1 && screenWidth >= 768) return true;
    return false;
  };

  return (
    <Swiper
      spaceBetween={screenWidth >= 1280 ? 48 : 24}
      slidesPerView={screenWidth > 767 ? 2 : 1}
      loop
      ref={swiperRef}
      style={{}}
    >
      {cardData.map((item, index) => {
        return (
          <SwiperSlide key={item.id}>
            <SwiperCard item={item} priority={setPriority(index)} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
