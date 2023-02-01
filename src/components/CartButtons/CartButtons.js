import React from 'react';
import styles from './CartButtons.module.css';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div className={styles.cart_btns_container}>
      <Link to='/cart' className={styles.cart_btn} onClick={closeSidebar}>
        Cart
        <span className={styles.cart_container}>
          <FaShoppingCart />
          <span className={styles.cart_value}>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className={styles.auth_btn}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type='button'
          className={styles.auth_btn}
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
