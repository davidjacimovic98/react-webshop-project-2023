import React from "react";
import styles from "./FeaturedProducts.module.css";
import { useProductsContext } from "../../context/products_context";
import { Error, Loading, Product } from "../../components";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();

  if (products_loading) {
    return <Loading />;
  }

  if (products_error) {
    return <Error />;
  }

  return (
    <section className={styles.featured_products_container}>
      <div className={styles.featured_products_title}>
        <h2>Featured products</h2>
        <div className={styles.featured_products_underline}></div>
      </div>
      <div className={styles.featured_products_content}>
        {featured_products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className={styles.featured_products_all_btn}>
        All products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
