import { IconMinus, IconAdd } from '@/app/utils/svg/accordionIcons';
import styles from './item.module.css';

export default function AccordionItem({ item, index, open, handleOpen }) {
  const { title, text } = item;
  const isOpen = open === index;

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion_divider}></div>
      <div
        className={styles.accordion_column}
        onClick={() => handleOpen(index)}
      >
        {isOpen ? (
          <div className={styles.accordion_column_icon}>
            {<IconMinus width={16} height={16} />}
          </div>
        ) : (
          <div className={styles.accordion_column_icon}>
            {<IconAdd width={16} height={16} />}
          </div>
        )}
        <h3 className={styles.accordion_tile}>{title}</h3>
      </div>
      <div className={styles.accordion_column_content}>
        {isOpen && <h4 className={styles.accordion_text}>{text}</h4>}
      </div>
    </div>
  );
}
