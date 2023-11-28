import styles from './card.module.css';

export default function Card({ icon, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        {icon}
        <h3 className={styles.card_title}>{title}</h3>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.card_text}>{text}</p>
    </div>
  );
}
