import React from "react";
import styles from "./CartColumns.module.css";

const CartColumns = () => {
  return (
    <div className={styles.cartcolumns_container}>
      <div className={styles.cartcolumns_content}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
