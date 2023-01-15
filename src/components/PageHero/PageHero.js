import React from 'react'
import styles from './PageHero.module.css'
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
  return (
    <section className={styles.pagehero_container}>
      <div className={styles.center_div}>
        <h3>
          <Link to='/'>Home</Link>/ {title}
        </h3>
      </div>
    </section>
  )
}

export default PageHero
