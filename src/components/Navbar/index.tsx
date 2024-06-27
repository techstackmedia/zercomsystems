import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <Link href='/'>SINC PARTNERS</Link>
      </div>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/sip">SIP</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/seeq">SEEQ</Link>
        <Link href="/platforms">Platforms</Link>
        <Link href="/initiatives">Initiatives</Link>
        <Link href="/more">More</Link>
      </div>
      <div className={styles.buttons}>
        <Link href="/sync" className={styles.syncButton}>SINC With Us</Link>
        <Link href="/apply" className={styles.applyButton}>Apply to SIP 1.0</Link>
      </div>
    </nav>
  );
}

export default Navbar;
