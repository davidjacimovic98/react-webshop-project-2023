import React from 'react';
import styles from './Stars.module.css';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className={styles.star_single}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className={styles.stars_container}>
      <div className={styles.stars_display}>{tempStars}</div>
      <p className={styles.stars_reviews}>({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
