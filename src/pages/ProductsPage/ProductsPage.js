import React from 'react';
import styles from './ProductsPage.module.css';
import { PageHero, Filters, Sort, ProductList } from '../../components';

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='Products' />
      <div className={styles.products_container}>
        <div className={styles.products_center}>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
