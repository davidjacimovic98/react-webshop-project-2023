import React from "react";
import styles from "./CartItem.module.css";
import { AmountButtons } from "../../components";
import { formatPrice } from "../../utils/helpers";
import { useCartContext } from "../../context/cart_context";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {};

  const decrease = () => {};

  return (
    <article className={styles.cartitem_container}>
      <div className={styles.title}>
        <img src={image} alt={name} />
        <div>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.color}>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className={styles.price_small}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className={styles.remove_btn}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
