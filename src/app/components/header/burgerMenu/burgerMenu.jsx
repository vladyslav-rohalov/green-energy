import IconBurger from '@/app/utils/svg/burger';
import styles from './burgerMenu.module.css';

export default function BurgerMenu({ handleMobile }) {
  return (
    <button className={styles.button_burger} onClick={handleMobile}>
      <IconBurger />
    </button>
  );
}
