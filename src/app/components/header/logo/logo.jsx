import { IconLogo, IconLogoText, IconText } from '@/app/utils/svg/logo';
import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo_container}>
      <IconLogo />
      <IconLogoText />
      <IconText />
    </div>
  );
}
