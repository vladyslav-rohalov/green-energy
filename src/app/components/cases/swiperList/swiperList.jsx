'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import SwiperCard from '../card/card';
import { cardData } from '../card/data';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function SwiperList({ swiperRef }) {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      effect={'fade'}
      slidesPerView={1}
      loop
      ref={swiperRef}
      modules={[EffectFade]}
      style={{}}
    >
      {cardData.map((item, index) => {
        return (
          <SwiperSlide key={item.id}>
            <SwiperCard item={item} priority={index === 0 ? 'true' : 'false'} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
