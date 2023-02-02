import React from 'react';
import styles from './Sort.module.css';
import { useFiltersContext } from '../../context/filters_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
  const { filtered_products, grid_view, setGridView, setListView, updateSort } =
    useFiltersContext();

  return (
    <section className={styles.sort_container}>
      <div className={styles.sort_btns_container}>
        <button
          type='button'
          className={
            grid_view ? styles.active_view_btn : styles.regular_view_btn
          }
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={
            !grid_view ? styles.active_view_btn : styles.regular_view_btn
          }
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{filtered_products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort by</label>
        <select
          name='sort'
          id='sort'
          className={styles.sort_select}
          onChange={updateSort}
        >
          <option value='price-lowest'>Price (lowest)</option>
          <option value='price-highest'>Price (highest)</option>
          <option value='name-a'>Name (A-Z)</option>
          <option value='name-z'>Name (Z-A)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
