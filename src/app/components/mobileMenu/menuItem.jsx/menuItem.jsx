import { useState, useEffect } from 'react';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './menuItem.module.css';

export default function MenuItem({ item, activePage, setActivePage }) {
  const [color, setColor] = useState('#FFFFFF40');

  const pageUrl = new URL(window.location.href);
  const fragment = pageUrl.hash.substring(1);

  const { url, name } = item;
  const nameArr = name.toLowerCase().split(' ');

  useEffect(() => {
    setActivePage(prev =>
      nameArr.includes(prev.toLowerCase()) ? prev : fragment
    );
  }, [fragment, nameArr, activePage, setActivePage]);

  useEffect(() => {
    nameArr.includes(activePage) ? setColor('#FFFFFF') : setColor('#FFFFFF40');
  }, [activePage, nameArr]);

  const handleEnter = () => {
    if (nameArr.includes(activePage)) return;
    setColor('#97D28B');
  };

  const handleLeave = () => {
    if (nameArr.includes(activePage)) return;
    setColor('#FFFFFF40');
  };

  return (
    <li>
      <a
        href={url}
        className={styles.mm_list_item}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ color: color }}
      >
        {name} <IconArrow width={16} height={16} rotate={-45} color={color} />
      </a>
    </li>
  );
}
