import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const EquityJobs: React.FC = () => {
  const jobs = [
    {
      company: 'Skimake',
      position: 'Chief Executive Officer',
      location: 'Abuja, Nigeria',
      industry: 'On-demand print',
      equity: '1.2%',
      stipend: 'NGN 200,000/mth',
      deadline: '24th, January 2024',
      roleType: 'Full-time',
    },
    {
      company: 'Kreeca Market',
      position: 'UX Strategist',
      location: 'Abuja, Nigeria',
      industry: 'E-commerce',
      equity: '1.2%',
      stipend: 'NGN 200,000/mth',
      deadline: '24th, January 2024',
      roleType: 'Full-time',
    },
    {
      company: 'Krowdback',
      position: 'CTO & Head of Innovations',
      location: 'Abuja, Nigeria',
      industry: 'Fintech',
      equity: '1.2%',
      stipend: 'NGN 200,000/mth',
      deadline: '24th, January 2024',
      roleType: 'Full-time',
    },
    {
      company: 'Wettaa Logistics',
      position: 'Backend Developer',
      location: 'Abuja, Nigeria',
      industry: 'Transportation',
      equity: '1.2%',
      stipend: 'NGN 200,000/mth',
      deadline: '24th, January 2024',
      roleType: 'Full-time',
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Equity Jobs</h1>
      <p className={styles.description}>
        See companies and startups offering equity or a mix of cash and equity for very important positions in their company.
      </p>
      <div className={styles.jobs}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <h2 className={styles.company}>{job.company}</h2>
            <p className={styles.position}>{job.position}</p>
            <p className={styles.detail}><strong>Location:</strong> {job.location}</p>
            <p className={styles.detail}><strong>Industry:</strong> {job.industry}</p>
            <p className={styles.detail}><strong>Equity:</strong> {job.equity}</p>
            <p className={styles.detail}><strong>Stipend:</strong> {job.stipend}</p>
            <p className={styles.detail}><strong>Deadline:</strong> {job.deadline}</p>
            <p className={styles.detail}><strong>Role Type:</strong> {job.roleType}</p>
            <button className={styles.viewButton}>View Details</button>
          </div>
        ))}
      </div>
      <div className={styles.moreJobs}>
        <Link href="#" className={styles.moreJobsLink}>See More Equity Jobs →</Link>
      </div>
    </section>
  );
};

export default EquityJobs;
