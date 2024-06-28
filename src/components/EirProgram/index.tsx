"use client";
import React, { useRef } from 'react';
import styles from './index.module.css';
import applicationIconImg from '../../../public/assets/applicationIcon.png'
import alignmentIconImg from '../../../public/assets/alignmentIcon.png'
import negotiationIconImg from '../../../public/assets/negotiationIcon.png'
import onboardingIconImg from '../../../public/assets/onboardingIcon.png'
import Image, { StaticImageData } from 'next/image';

// Define the type for a step
type Step = {
  icon: StaticImageData;
  title: string;
  description: string;
  width: number;
  height: number;
};
// Define the steps data
const steps: Step[] = [
  {
    icon: applicationIconImg,
    title: 'Application and Selection',
    description: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.',
    width: 60,
    height: 60,
  },
  {
    icon: alignmentIconImg,
    title: 'Alignment Meeting and Proposal Submission',
    description: 'If your application stands out, we\'ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.',
    width: 60,
    height: 60,
  },
  {
    icon: negotiationIconImg,
    title: 'Negotiation and Agreement',
    description: 'Upon successful alignment and proposal review, we\'ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we\'ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.',
    width: 60,
    height: 60,
  },
  {
    icon: onboardingIconImg,
    title: 'Onboarding',
    description: 'Congratulations! Once the agreement is finalized, you will undergo an onboarding process to familiarize yourself with our portfolio companies and key team members. Facilitated by SINC Partners, this integration process ensures you are well-prepared to collaborate effectively and make a meaningful impact from day one.',
    width: 60,
    height: 60,
  },
  {
    icon: applicationIconImg,
    title: 'Application and Selection',
    description: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.',
    width: 60,
    height: 60,
  },
  {
    icon: alignmentIconImg,
    title: 'Alignment Meeting and Proposal Submission',
    description: 'If your application stands out, we\'ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.',
    width: 60,
    height: 60,
  },
  {
    icon: negotiationIconImg,
    title: 'Negotiation and Agreement',
    description: 'Upon successful alignment and proposal review, we\'ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we\'ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.',
    width: 60,
    height: 60,
  },
  {
    icon: onboardingIconImg,
    title: 'Onboarding',
    description: 'Congratulations! Once the agreement is finalized, you will undergo an onboarding process to familiarize yourself with our portfolio companies and key team members. Facilitated by SINC Partners, this integration process ensures you are well-prepared to collaborate effectively and make a meaningful impact from day one.',
    width: 60,
    height: 60,
  },
  {
    icon: applicationIconImg,
    title: 'Application and Selection',
    description: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.',
    width: 60,
    height: 60,
  },
  {
    icon: alignmentIconImg,
    title: 'Alignment Meeting and Proposal Submission',
    description: 'If your application stands out, we\'ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.',
    width: 60,
    height: 60,
  },
  {
    icon: negotiationIconImg,
    title: 'Negotiation and Agreement',
    description: 'Upon successful alignment and proposal review, we\'ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we\'ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.',
    width: 60,
    height: 60,
  },
  {
    icon: onboardingIconImg,
    title: 'Onboarding',
    description: 'Congratulations! Once the agreement is finalized, you will undergo an onboarding process to familiarize yourself with our portfolio companies and key team members. Facilitated by SINC Partners, this integration process ensures you are well-prepared to collaborate effectively and make a meaningful impact from day one.',
    width: 60,
    height: 60,
  },
];

const EirProgram: React.FC = () => {
  // Create a ref to reference the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles["eir-program"]}>
      <h2>Join Our Entrepreneur In Residence (EIR) Program</h2>
      <p>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
      <div className={styles["steps-container"]}>
        {/* Scroll button for left direction */}
        <button 
          className={`${styles["scroll-button"]} ${styles["left"]}`} 
          onClick={() => scroll('left')} 
          aria-label="Scroll left"
        >
          &#8249;
        </button>
        <div className={styles.steps} ref={containerRef}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles["step-icon"]}>
                <Image src={step.icon} alt={step.title} width={step.width} height={step.height} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        {/* Scroll button for right direction */}
        <button 
          className={`${styles["scroll-button"]} ${styles.right}`} 
          onClick={() => scroll('right')} 
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default EirProgram;
