import Image from 'next/image';
import Card from './card/card';
import { IconOpennes, IconInnovation } from '@/app/utils/svg/features';
import { IconResponsibility, IconQuality } from '@/app/utils/svg/features';
import styles from './about.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className={styles.text_container}>
        <div className={styles.container}>
          <h2 className={styles.title}>Main values of our company</h2>
        </div>

        <div className={styles.vertical_divider}></div>

        <div className={styles.container}>
          <p className={styles.text}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&apos;s energy needs.
          </p>
        </div>
      </div>
      <div className={styles.card_container}>
        <Card
          className={styles.card1}
          icon={<IconOpennes />}
          title={'Openness'}
          text={'to the world, people, new ideas and projects'}
        />
        <Card
          className={styles.card2}
          icon={<IconResponsibility />}
          title={'Responsibility'}
          text={
            'we are aware that the results of our work have an impact on our lives and the lives of future generations'
          }
        />
        <div className={`${styles.img_container} ${styles.image1}`}>
          <Image
            src="/about1.jpg"
            alt="wind-farms-fields"
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={`${styles.img_container} ${styles.image2}`}>
          <Image
            src="/about2.jpg"
            alt="wind-farms-fields"
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <Card
          className={styles.card3}
          icon={<IconInnovation />}
          title={'Innovation'}
          text={
            'we use the latest technology to implement non-standard solutions'
          }
        />
        <Card
          className={styles.card4}
          icon={<IconQuality />}
          title={'Quality'}
          text={
            'we do not strive to be the first among others, but we want to be the best in our business'
          }
        />
      </div>
    </section>
  );
}
