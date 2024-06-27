import React from 'react';
import styles from './index.module.css'

type Company = {
  name: string;
  logoUrl: string;
};

const companies: Company[] = [
  { name: 'kofoundme', logoUrl: '/logos/kofoundme.png' },
  { name: 'Founders School', logoUrl: '/logos/founders-school.png' },
  // Add the rest of the companies here
  // { name: 'Company Name', logoUrl: '/path/to/logo.png' },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className={styles['portfolio-grid']}>
      <h2>Our Studio Portfolio</h2>
      <p>Our 2024 Service Incubator Portfolio Companies</p>
      <div className={styles.grid}>
        {companies.map((company, index) => (
          <div key={index} className={styles.company}>
            <img src={company.logoUrl} alt={company.name} />
          </div>
        ))}
      </div>
      <button className={styles['view-all']}>View All Companies</button>
    </div>
  );
};

export default PortfolioGrid;
