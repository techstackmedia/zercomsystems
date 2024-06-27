import React from 'react';
import styles from './index.module.css'

type Step = {
  number: number;
  title: string;
  description: string;
  color: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: 'We Ideate',
    description: 'We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.',
    color: '#000000',
  },
  {
    number: 2,
    title: 'You Validate',
    description: 'You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions.',
    color: '#FF6600',
  },
  {
    number: 3,
    title: 'You Co-own',
    description: 'After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.',
    color: '#FF00FF',
  },
];

const CofoundSteps: React.FC = () => {
  return (
    <div className={styles["cofound-steps"]}>
      <h2>Co-found With Us</h2>
      <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles['step-number']} style={{ backgroundColor: step.color }}>
              {step.number}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CofoundSteps;
