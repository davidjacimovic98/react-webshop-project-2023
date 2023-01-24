import React from 'react';
import styles from './PageHero.module.css';
import { Link } from 'react-router-dom';

const PageHero = ({ title, single_product }) => {
  return (
    <section className={styles.pagehero_container}>
      <div className={styles.center_div}>
        <h3>
          <Link to='/'>Home</Link>/{' '}
          {single_product && <Link to='/products'>Products</Link>}
          {single_product && '/'}{' '}
          <span className={styles.pagehero_title}>{title}</span>
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
