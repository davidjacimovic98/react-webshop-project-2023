import React, { useState } from 'react';
import styles from './AddToCart.module.css';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { AmountButtons } from '../../components';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section className={styles.addtocart_container}>
      <div className={styles.addtocart_colors}>
        <span>colors : </span>
        <div className={styles.available_colors}>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color
                    ? styles.color_btn_active
                    : styles.color_btn
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.addtocart_btn_container}>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to='/cart' className={styles.link_to_cart}>
          Add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
