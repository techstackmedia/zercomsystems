import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import firstFeatureImg from '../../../public/assets/firstFeature.png'
import secondFeatureImg from '../../../public/assets/firstFeature.png'

const CardSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={firstFeatureImg} alt="Card 1" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={secondFeatureImg} alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={secondFeatureImg} alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={secondFeatureImg} alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={secondFeatureImg} alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image src={secondFeatureImg} alt="Card 2" />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default CardSlider;
