import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';
import heroImg from '../../../public/assets/hero.png';

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
        <Image 
          src={heroImg} 
          alt='Hero Image' 
          width={703} 
          height={590} 
          priority 
          style={{ width: '100%', height: 'auto' }} // Maintain aspect ratio
        />
      </div>
    </div>
  );
};

export default Hero;
