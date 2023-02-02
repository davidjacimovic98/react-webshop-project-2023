import React from 'react';
import styles from './CartPage.module.css';
import { CartContent, PageHero } from '../../components';
import { useCartContext } from '../../context/cart_context';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className={styles.cartpage_container}>
        <div className={styles.cartpage_empty}>
          <h2>Your cart is empty</h2>
          <Link to='/products' className={styles.products_link}>
            Fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <main className={styles.cart_container}>
        <CartContent />
      </main>
    </main>
  );
};

export default CartPage;
