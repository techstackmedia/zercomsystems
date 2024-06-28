import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import logo from '../../../public/assets/logo.png'
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <Link href='/' className={styles.sinc}><Image src={logo} width={114.94} height={64} alt='sinc logo' /></Link>
          <div className={styles.navLinks}>
          <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/sip">SIP</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/seeq">SEEQ</Link>
        <Link href="/platforms">Platforms</Link>
        <Link href="/initiatives">Initiatives</Link>
        <Link href="/more">More</Link>
        </div>
      </div>
      </div>
      
      <div className={styles.buttons}>
        <Link href="/sync" className={styles.syncButton}>SINC With Us</Link>
        <Link href="/apply" className={styles.applyButton}>Apply to SIP 1.0</Link>
      </div>
    </nav>
  );
}

export default Navbar;
