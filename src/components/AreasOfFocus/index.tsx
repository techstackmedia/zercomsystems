import React from 'react';
import styles from './index.module.css';

const AreasOfFocus: React.FC = () => {
  return (
    <section className={styles.areasOfFocus}>
      <h2>Our Area of Focus</h2>
      <p className={styles.description}>
        In our quest to help make success available to everyone, we have initial strategic
        direction to focus on these five key areas at the lab
      </p>
      <div className={styles.grid}>
        <div className={styles.focusItem} style={{ backgroundColor: '#333' }}>
          <h3>01</h3>
          <p>Business Support & Incubation</p>
        </div>
        <div className={styles.focusItem} style={{ backgroundColor: '#ff6f00' }}>
          <h3>02</h3>
          <p>On-Demand & As-A-Service</p>
        </div>
        <div className={styles.focusItem} style={{ backgroundColor: '#ff4081' }}>
          <h3>03</h3>
          <p>Marketplace & Crowdsourcing</p>
        </div>
        <div className={styles.focusItem} style={{ backgroundColor: '#00796b' }}>
          <h3>04</h3>
          <p>Aggregation & Shared Economy</p>
        </div>
        <div className={styles.focusItem} style={{ backgroundColor: '#ff4081' }}>
          <h3>05</h3>
          <p>Decentralized Economy & Digital Assets</p>
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
