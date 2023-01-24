import React from 'react';
import styles from './Filters.module.css';
import { useFiltersContext } from '../../context/filters_context';
import { formatPrice, getUniqueValues } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFiltersContext();

  // I know it is not good to use "magic strings" but there are only three of them so that's why I left them in the code.
  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <section className={styles.filters_container}>
      <div className={styles.filters_content}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.filters_form}
        >
          {/* search input */}
          <div className={styles.filters_form_control}>
            <input
              type='text'
              name='text'
              placeholder='Search...'
              className={styles.filters_text_input}
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* categories */}
          <div className={styles.filters_form_control}>
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    name='category'
                    type='button'
                    onClick={updateFilters}
                    className={`${
                      category === c.toLowerCase()
                        ? styles.active_category_btn
                        : styles.regular_category_btn
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className={styles.filters_form_control}>
            <h5>Company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className={styles.filters_company}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className={styles.filters_form_control}>
            <h5>Colors</h5>
            <div className={styles.filters_colors}>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${
                        color === 'all'
                          ? styles.active_all_colors_btn
                          : styles.regular_all_colors_btn
                      }`}
                      key={index}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? styles.filters_active_color_btn
                        : styles.filters_regular_color_btn
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className={styles.filters_form_control}>
            <h5>Price</h5>
            <p className={styles.filters_price}>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className={styles.filters_form_control_shipping}>
            <label htmlFor='shipping'>Free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button
          type='button'
          className={styles.filters_clear_btn}
          onClick={clearFilters}
        >
          Clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
