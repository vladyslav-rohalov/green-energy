'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import IconDot from '@/app/utils/svg/dot';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './getInTouch.module.css';

export default function GetInTouch() {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      screenWidth < 767 ? setShouldRender(false) : setShouldRender(true);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <Link href={'#contacts'}>
      <button
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Get in touch
        {isHovered ? (
          <span className={styles.button_span}>
            <IconArrow width={8} height={8} rotate={90} color="#173D33" />
          </span>
        ) : (
          <IconDot />
        )}
      </button>
    </Link>
  );
}
