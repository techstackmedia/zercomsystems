import React from 'react';
import styles from './index.module.css';

const InvestorsNetwork: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SINC Investors Network</h1>
      <p className={styles.description}>
        Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. 
        Our portfolio companies are valued at $50k at start, with these low valuations, you are guaranteed at least 2x-5x, usually been the first to invest.
      </p>
      <p className={styles.disclaimer}>
        Disclaimer: These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest.
      </p>
      <div className={styles.section}>
        <h2>Micro Angel Investors & Service Incubators (Invest from $500 & above)</h2>
        <div className={styles.stages}>
          <div className={styles.stage}>
            <h3>Idea Stage</h3>
            <ul>
              <li>$5k for 5% Equity</li>
              <li>Expected Revenue at This Stage: $0/mth</li>
              <li>Duration of Raise: 1mth</li>
              <li>Who Can Invest: People with Domain Expertise and Advisors</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Build Stage</h3>
            <ul>
              <li>$25k worth of service for 10% Equity</li>
              <li>Expected Revenue at This Stage: $100+/mth</li>
              <li>Duration of Raise: 1-3mths</li>
              <li>Who Can Invest: Developers, Engineers, Growth Marketers</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Validation Stage</h3>
            <ul>
              <li>$50k for 5% Equity</li>
              <li>Expected Revenue at This Stage: $1k+/mth</li>
              <li>Duration of Raise: 3-6mths</li>
              <li>Who Can Invest: Everyone</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Traction Stage</h3>
            <ul>
              <li>$125k worth of service for 8% Equity</li>
              <li>Expected Revenue at This Stage: $5k+/mth</li>
              <li>Duration of Raise: 6-12mths</li>
              <li>Who Can Invest: Media, Influencers, Celebrity, Platform Owners</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Angel Investors & Venture Capital (Invest from $50k and above)</h2>
        <div className={styles.stages}>
          <div className={styles.stage}>
            <h3>Pre-seed Stage</h3>
            <ul>
              <li>$1.5M for 10% Equity</li>
              <li>Expected Revenue at This Stage: $50k+/mth</li>
              <li>Duration of Raise: 6-18mths</li>
              <li>Who Can Invest: Angel Investors, VCs, PE, Institutions</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Seed Stage</h3>
            <ul>
              <li>$7.5M for 20% Equity</li>
              <li>Expected Revenue at This Stage: $250k+/mth</li>
              <li>Duration of Raise: 12-24mths</li>
              <li>Who Can Invest: VCs, PE, Institutions</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>IPO Stage</h3>
            <ul>
              <li>$15B for 20% Equity</li>
              <li>Expected Revenue at This Stage: $1M+/mth</li>
              <li>Duration of Raise: 18-36mths</li>
              <li>Who Can Invest: The Public</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <button className={styles.joinButton}>Join SINC Network</button>
      </div>
    </div>
  );
};

export default InvestorsNetwork;
