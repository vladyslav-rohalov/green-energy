'use client';
import { useState } from 'react';
import { IconFacebook, IconInstagram } from '@/app/utils/svg/social';
import styles from './social.module.css';

export default function Social({ isContacts = true }) {
  const initialColor = isContacts ? '#173D33' : '#ffffff';
  const [facebookColor, setFacebookColor] = useState(initialColor);
  const [instagramColor, setInstagramColor] = useState(initialColor);

  return (
    <ul className={styles.social_container}>
      <li
        style={{ padding: isContacts ? '12px' : 0 }}
        onMouseEnter={() => setFacebookColor('#97D28B')}
        onMouseLeave={() => setFacebookColor(initialColor)}
      >
        <a href={'https://www.facebook.com/'}>
          <IconFacebook color={facebookColor} />
        </a>
      </li>

      <li
        style={{ padding: isContacts ? '12px' : 0 }}
        onMouseEnter={() => setInstagramColor('#97D28B')}
        onMouseLeave={() => setInstagramColor(initialColor)}
      >
        <a href={'https://www.instagram.com/'}>
          <IconInstagram color={instagramColor} />
        </a>
      </li>
    </ul>
  );
}
