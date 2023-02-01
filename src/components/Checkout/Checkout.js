import React, { useState } from 'react';
import styles from './Checkout.module.css';
import { useUserContext } from '../../context/user_context';
import { useCartContext } from '../../context/cart_context';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { GiButtonFinger } from 'react-icons/gi';

const Checkout = () => {
  const { myUser } = useUserContext();
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const [isPaid, setIsPaid] = useState(false);

  const paymentSuccessful = () => {
    clearCart();
    setIsPaid(true);
  };

  if (isPaid) {
    return (
      <section className={styles.checkout_main}>
        <div className={styles.checkout_container}>
          <h3>Thank you, your payment was successful!</h3>
          <Link to='/' className={styles.back_home_link}>
            back home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.checkout_main}>
      <div className={styles.checkout_container}>
        <h3>Hello {myUser && myUser.name}</h3>
        <h4>
          Your total is{' '}
          {cart.length > 0 ? formatPrice(total_amount + shipping_fee) : '$0.00'}
        </h4>
        {cart.length < 1 ? (
          <button disabled className={styles.pay_btn}>
            Pay
          </button>
        ) : (
          <button className={styles.pay_btn} onClick={paymentSuccessful}>
            Pay
          </button>
        )}
      </div>
    </section>
  );
};

export default Checkout;
