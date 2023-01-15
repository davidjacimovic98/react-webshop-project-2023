import React from 'react'
import styles from './CheckoutPage.module.css'
import { PageHero } from '../../components'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='Checkout' />
      <section className={styles.checkout_page_container}>
        <h1>Checkout here</h1>
      </section>
    </main>
  )
}

export default CheckoutPage
