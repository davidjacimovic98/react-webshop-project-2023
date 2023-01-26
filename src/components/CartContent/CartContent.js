import React from "react";
import styles from "./CartContent.module.css";
import { useCartContext } from "../../context/cart_context";
import { CartColumns, CartItem, CartTotals } from "../../components";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className={styles.cartcontent_container}>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className={styles.link_container}>
        <Link to="/products" className={styles.link_btn}>
          Continue shopping
        </Link>
        <button type="button" onClick={clearCart} className={styles.clear_btn}>
          Clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};

export default CartContent;
