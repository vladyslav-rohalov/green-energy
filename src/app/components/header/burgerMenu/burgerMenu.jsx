import IconBurger from '@/app/utils/svg/burger';
import styles from './burgerMenu.module.css';

export default function BurgerMenu() {
  return (
    <button className={styles.button_burger}>
      <IconBurger />
    </button>
  );
}
