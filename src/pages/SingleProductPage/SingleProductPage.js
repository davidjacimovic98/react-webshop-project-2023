import React, { useEffect } from "react";
import styles from "./SingleProductPage.module.css";
import { useProductsContext } from "../../context/products_context";
import { single_product_url } from "../../utils/constants";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../../components";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading,
    single_product_error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  if (single_product_loading) {
    return <Loading />;
  }

  if (single_product_error) {
    return <Error />;
  }

  const {
    id: sku,
    name,
    price,
    stars,
    stock,
    description,
    reviews,
    company,
    images,
  } = single_product;

  return (
    <main>
      <PageHero title={name} single_product />
      <div className={styles.singlepage_container}>
        <Link to="/products" className={styles.back_to_products_btn}>
          back to products
        </Link>
        <div className={styles.singlepage_center}>
          <ProductImages images={images} />
          <section className={styles.singlepage_content}>
            <h2>{name}</h2>
            <Stars />
            <h5>{formatPrice(price)}</h5>
            <p className={styles.singlepage_desc}>{description}</p>
            <p className={styles.singlepage_info}>
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className={styles.singlepage_info}>
              <span>SKU : </span>
              {sku}
            </p>
            <p className={styles.singlepage_info}>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
