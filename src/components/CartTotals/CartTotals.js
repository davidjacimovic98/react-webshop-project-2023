import React from "react";
import styles from "./CartTotals.module.css";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <section className={styles.totals_container}>
      <div>
        <article className={styles.totals_content}>
          <h5>
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Total price :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className={styles.checkout_link}>
          Proceed to checkout
        </Link>
      </div>
    </section>
  );
};

export default CartTotals;
