import Card from './card/card';
import { IconOpennes, IconInnovation } from '@/app/utils/svg/features';
import { IconResponsibility, IconQuality } from '@/app/utils/svg/features';
import styles from './about.module.css';

export default function About() {
  return (
    <section className={styles.about_container}>
      <h2 className={styles.about_title}>Main values of our company</h2>
      <p className={styles.about_text}>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </p>
      <div className={styles.card_container}>
        <Card
          icon={<IconOpennes />}
          title={'Openness'}
          text={'to the world, people, new ideas and projects'}
        />
        <Card
          icon={<IconResponsibility />}
          title={'Responsibility'}
          text={
            'we are aware that the results of our work have an impact on our lives and the lives of future generations'
          }
        />
        <Card
          icon={<IconInnovation />}
          title={'Innovation'}
          text={
            'we use the latest technology to implement non-standard solutions'
          }
        />
        <Card
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
