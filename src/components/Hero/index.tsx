import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textSection}>
        <h1>SINC Partners is a service incubation company</h1>
        <p>
          Connecting experts in product development and growth marketing willing
          to offer their services to amazing startups in exchange for minute
          equity (usually 0.5% to 2%).
        </p>
        <Link href='/sync' className={styles.ctaButton}>
          SINC With Us
        </Link>
      </div>
      <div className={styles.imageSection}>
        <img src='/path/to/your/image.png' alt='Hero Image' />
      </div>
    </div>
  );
};

export default Hero;
