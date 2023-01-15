import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { CartButtons } from '../../components'
import { links } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link to='/'>
            <img src={logo} alt='website logo' />
          </Link>
          <button
            type='button'
            className={styles.nav_toggle}
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className={styles.nav_links}>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.cart_btns_visible}>
          <CartButtons />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
