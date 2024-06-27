import React from 'react';
import styles from './index.module.css';

const CardSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <div className={styles.card}>
            <img src="/path/to/image1.png" alt="Card 1" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <img src="/path/to/image2.png" alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default CardSlider;
