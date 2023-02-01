import React from 'react';
import styles from './CheckoutPage.module.css';
import { PageHero, Checkout } from '../../components';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='Checkout' />
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
