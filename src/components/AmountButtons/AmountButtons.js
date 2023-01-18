import React from 'react';
import styles from './AmountButtons.module.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className={styles.amountbtns_container}>
      <button type='button' className={styles.amount_btn} onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className={styles.amount_display}>{amount}</h2>
      <button type='button' className={styles.amount_btn} onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
