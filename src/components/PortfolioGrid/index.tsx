import React from 'react';
import styles from './index.module.css';
import Image, { StaticImageData } from 'next/image';
import foundSchoolImg from '../../../public/assets/foundSchool.png';

type Company = {
  name: string;
  logoUrl: StaticImageData;
};

const companies: Company[] = [
  { name: 'kofoundme', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  { name: 'Founders School', logoUrl: foundSchoolImg },
  // Add the rest of the companies here
  // { name: 'Company Name', logoUrl: '/path/to/logo.png' },
];

const PortfolioGrid: React.FC = () => {
  return (
    <section className={styles['portfolio-grid']}>
      <h2>Our Studio Portfolio</h2>
      <p>Our 2024 Service Incubator Portfolio Companies</p>
      <div className={styles.grid}>
        {companies.map((company, index) => (
          <div key={index} className={styles.company}>
            <Image src={company.logoUrl} alt={company.name} />
          </div>
        ))}
      </div>
      <button className={styles['view-all']}>View All Companies</button>
    </section>
  );
};

export default PortfolioGrid;
