import React from 'react'
import styles from './CartButtons.module.css'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()

  return (
    <div className={styles.cart_btns_container}>
      <Link to='/cart' className={styles.cart_btn} onClick={closeSidebar}>
        Cart
        <span className={styles.cart_container}>
          <FaShoppingCart />
          <span className={styles.cart_value}>12</span>
        </span>
      </Link>
      <button type='button' className={styles.auth_btn}>
        Login <FaUserPlus />
      </button>
    </div>
  )
}

export default CartButtons
