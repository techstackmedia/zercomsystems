import React from 'react';
import styles from './index.module.css';

const HeroEnd = () => {
  return (
    <div className={styles.hero}>
      <h1>Let's build companies that help everyone succeed</h1>
      <div className={styles.buttons}>
        <button className={styles.sincButton}>SINC With Us</button>
        <button className={styles.applyButton}>Apply to SIP 1.0</button>
      </div>
    </div>
  );
};

export default HeroEnd;
