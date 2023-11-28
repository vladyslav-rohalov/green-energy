import Logo from './logo/logo';
import BurgerMenu from './burgerMenu/burgerMenu';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <BurgerMenu />
    </div>
  );
}
