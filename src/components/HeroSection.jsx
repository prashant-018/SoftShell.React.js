import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageWrapper}>
        <img
          src="/2.jpeg"
          alt="Company Logo"
          className={styles.heroLogo}
          loading="lazy"
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>
          Sell Your Digital Licenses Easily
        </h1>
        <p className={styles.heroSubheading}>
          Get the best value for your unused software licenses in minutes.
        </p>
        <button className={styles.heroButton}>
          Sell My Licenses
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
