import React from 'react';
import styles from './ListView.module.css';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div className={styles.listview_container}>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className={styles.single_product_container}>
            <img src={image} alt={name} />
            <div className={styles.single_product_content}>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className={styles.link_btn}>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
