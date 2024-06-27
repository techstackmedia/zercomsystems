import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const ServiceIncubationModel: React.FC = () => {
  return (
    <section className={styles.serviceIncubationModel}>
      <h2>Our Service Incubation Model</h2>
      <p className={styles.description}>
        The Service Incubation model is an alternate funding model for startups that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12-24 months as been first to invest.
      </p>
      <h3>Hypothesis</h3>
      <p className={styles.hypothesisDescription}>
        Just a few reasons we know it&apos;s time for this model within the ecosystem
      </p>
      <div className={styles.grid}>
        <div className={styles.hypothesisItem}>
          <p>Most early-stage companies and pre-product startups cannot afford professional services especially those who don&apos;t have family and friends&apos; network that can support</p>
        </div>
        <div className={styles.hypothesisItem}>
          <p>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</p>
        </div>
        <div className={styles.hypothesisItem}>
          <p>Young professionals who don&apos;t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
        </div>
      </div>
      <h3>Case Study</h3>
      <p className={styles.caseStudyDescription}>
        See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
      </p>
      <div className={styles.buttons}>
        <button>Service Incubator Equity</button>
        <button>SEEQ Maths Equation</button>
        <button>Value of my Equity Over Time</button>
      </div>
      <Link className={styles.link} href="#">Become A Service Incubator →</Link>
    </section>
  );
};

export default ServiceIncubationModel;
