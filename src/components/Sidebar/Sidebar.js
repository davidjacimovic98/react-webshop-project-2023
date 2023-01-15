import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import { CartButtons } from '../../components'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <div className={styles.sidebar_container}>
      <aside
        className={
          isSidebarOpen
            ? `${styles.sidebar} ${styles.show_sidebar}`
            : styles.sidebar
        }
      >
        <div className={styles.sidebar_header}>
          <Link to='/'>
            <img
              src={logo}
              alt='website logo'
              className={styles.sidebar_logo}
            />
          </Link>
          <button
            type='button'
            className={styles.close_btn}
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className={styles.sidebar_links}>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <div className={styles.cart_btns_visible}>
          <CartButtons />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
