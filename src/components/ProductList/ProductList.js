import React from 'react';
import { useFiltersContext } from '../../context/filters_context';
import { GridView, ListView } from '../../components';
import styles from './ProductList.module.css';

const ProductList = () => {
  const { filtered_products, grid_view } = useFiltersContext();

  if (filtered_products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }

  if (grid_view === false) {
    return <ListView products={filtered_products} />;
  }

  return <GridView products={filtered_products}>product list</GridView>;
};

export default ProductList;
