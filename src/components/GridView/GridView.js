import React from 'react';
import styles from './GridView.module.css';
import { Product } from '../../components';

const GridView = ({ products }) => {
  return (
    <section className={styles.gridview_container}>
      <div className={styles.gridview_products}>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
