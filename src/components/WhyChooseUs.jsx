import React from 'react';
import styles from './WhyChooseUs.module.css';
import { FaBolt, FaLock, FaUsers, FaThumbsUp } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <div className={styles.pointsContainer}>
        <div className={styles.point}>
          <FaBolt className={styles.icon} />
          <h3>Fast Payment</h3>
          <p>Get your money instantly after the deal.</p>
        </div>
        <div className={styles.point}>
          <FaLock className={styles.icon} />
          <h3>Secure</h3>
          <p>Your data is protected with top-notch security.</p>
        </div>
        <div className={styles.point}>
          <FaUsers className={styles.icon} />
          <h3>Trusted Buyers</h3>
          <p>We connect you with verified and reliable buyers.</p>
        </div>
        <div className={styles.point}>
          <FaThumbsUp className={styles.icon} />
          <h3>High Satisfaction</h3>
          <p>Thousands of users trust and love our service.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
