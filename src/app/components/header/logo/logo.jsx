import Link from 'next/link';
import { IconLogo, IconLogoText, IconText } from '@/app/utils/svg/logo';
import styles from './logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo_container}>
      <IconLogo />
      <IconLogoText />
      <IconText />
    </Link>
  );
}
