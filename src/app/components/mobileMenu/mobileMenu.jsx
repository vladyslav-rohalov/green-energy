import { useState } from 'react';
import IconClose from '@/app/utils/svg/close';
import Divider from '../common/divider/divider';
import MenuItem from './menuItem.jsx/menuItem';
import Social from '../contacts/social/social';
import { mobileList } from './data';
import styles from './mobileMenu.module.css';

export default function MobileMenu({ onClose }) {
  const [activePage, setActivePage] = useState('main');
  const [closeColor, setCloseColor] = useState('#FFFFFF');

  return (
    <>
      <button
        className={styles.mm_close_btn}
        onClick={onClose}
        onMouseEnter={() => setCloseColor('#97d28b')}
        onMouseLeave={() => setCloseColor('#ffffff')}
        style={{ color: closeColor }}
      >
        <IconClose color={closeColor} />
        close
      </button>
      <Divider color="#FFFFFF" />
      <div className={styles.mm_container}>
        <ul className={styles.mm_list}>
          {mobileList.map((item, index) => {
            return (
              <MenuItem
                key={item.id}
                item={item}
                index={index}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            );
          })}
        </ul>
        <Social isContacts={false} />
      </div>
    </>
  );
}
