import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import facebookIconImg from '../../../public/assets/facebookIcon.png'
import Image from 'next/image';
import whatsappImg from '../../../public/assets/whatsapp.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>Newsletter</h2>
        <p>
          Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
        </p>
        <div className={styles.subscriptionForm}>
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3>SINC PARTNERS</h3>
          <p>
            SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
          </p>
        </div>
        <div className={styles.column}>
          <h3>Platforms</h3>
          <ul>
            <li>Kofoundme</li>
            <li>InResidency</li>
            <li>Service Market</li>
            <li>Founders School</li>
            <li>Metty</li>
            <li>Grantty</li>
            <li>Boldtell</li>
            <li>Chekwa</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Initiatives</h3>
          <ul>
            <li>Jabi Plains</li>
            <li>Local Pricing Initiative</li>
            <li>Scholarship Program</li>
            <li>SSMN Pricing</li>
            <li>University STEM</li>
            <li>University InResidency</li>
            <li>1M Nigeria 🌍 Products</li>
            <li>Founders Festival</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>About Us</h3>
          <ul>
            <li>Who We Are</li>
            <li>Our People</li>
            <li>Concept Innovations</li>
            <li>Our Process</li>
            <li>Investors Network</li>
            <li>CSR & Events</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>More</h3>
          <ul>
            <li>Services</li>
            <li>Equity Jobs</li>
            <li>EIR Program</li>
            <li>Offers</li>
            <li>Innovation News</li>
            <li>FAQ</li>
            <li>Blog & Resources</li>
            <li>Press</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Locations</h3>
          <p>Abuja, Nigeria</p>
          <p>Lagos, Nigeria</p>
          <p>Philadelphia, USA</p>
          <div className={styles.trustedBusiness}>
            <Image src={whatsappImg} alt="Accredited Business A+" width={39} height={40} />
            <button>Chat with Us</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 SINC Partners Ltd. All rights reserved</p>
        <div className={styles.links}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Security</Link>
        </div>
        <p>Web In Nigeria 🇳🇬</p>
        <div className={styles.socialMedia}>
          <Link href="#"><Image src={facebookIconImg} alt="Facebook" width={20.38} height={20.28} priority /></Link>
          <Link href="#"><Image src={facebookIconImg} alt="Twitter" width={20.38} height={20.28} priority /></Link>
          <Link href="#"><Image src={facebookIconImg} alt="Instagram"width={20.38} height={20.28} priority  /></Link>
          <Link href="#"><Image src={facebookIconImg} alt="LinkedIn" width={20.38} height={20.28} priority /></Link>
          <Link href="#"><Image src={facebookIconImg} alt="YouTube" width={20.38} height={20.28} priority /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
