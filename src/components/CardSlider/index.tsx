import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import firstFeatureImg from '../../../public/assets/firstFeature.png';
import secondFeatureImg from '../../../public/assets/firstFeature.png';

const CardSlider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={firstFeatureImg}
              alt='Card 1'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={secondFeatureImg}
              alt='Card 2'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={secondFeatureImg}
              alt='Card 2'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={secondFeatureImg}
              alt='Card 2'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={secondFeatureImg}
              alt='Card 2'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.card}>
            <Image
              src={secondFeatureImg}
              alt='Card 2'
              width={622}
              height={393}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
            <p>SINC Partners invests over 200 million naira in 5 startups</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
    </section>
  );
};

export default CardSlider;
