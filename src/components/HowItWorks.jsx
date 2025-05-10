import React from 'react';
import styles from './HowItWorks.module.css';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <FaUpload className={styles.icon} />
          <h3>Upload License</h3>
          <p>Submit your software license details securely.</p>
        </div>
        <div className={styles.step}>
          <FaSearchDollar className={styles.icon} />
          <h3>Get Valuation</h3>
          <p>We analyze and give you the best price estimate.</p>
        </div>
        <div className={styles.step}>
          <FaMoneyBillWave className={styles.icon} />
          <h3>Get Paid</h3>
          <p>Receive your payment quickly and safely.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
