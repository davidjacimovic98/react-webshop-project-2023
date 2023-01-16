import React from "react";
import styles from "./Product.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <article>
      <div className={styles.product_container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className={styles.product_img} />
          <div className={styles.product_link}>
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer className={styles.product_footer}>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

export default Product;
