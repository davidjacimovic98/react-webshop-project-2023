import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className={styles.error_page_container}>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className={styles.btn_link}>
          back home
        </Link>
      </section>
    </main>
  )
}

export default ErrorPage
