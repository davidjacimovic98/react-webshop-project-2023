import React from 'react';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/hero-bcg.jpeg';
import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <article className={styles.hero_content}>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel adipisci
          iure excepturi velit, ipsum rerum. Iste error eum optio cumque?
        </p>
        <Link to='/products' className={styles.hero_link}>
          shop now
        </Link>
      </article>
      <article className={styles.hero_img_container}>
        <img src={heroBcg} alt='nice desk' className={styles.big_img} />
        <img src={heroBcg2} alt='person working' className={styles.small_img} />
      </article>
    </section>
  );
};

export default Hero;
