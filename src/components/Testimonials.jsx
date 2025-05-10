import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonial}>
          <p className={styles.quote}>
            “I sold my unused software license in just a few minutes. Super fast payment and excellent support!”
          </p>
          <div className={styles.customerInfo}>
            <h3>Ravi Mehta</h3>
            <span>IT Manager, TechFlow Inc.</span>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.quote}>
            “The platform is so secure and easy to use. I’ve already recommended it to my entire team.”
          </p>
          <div className={styles.customerInfo}>
            <h3>Sneha Kapoor</h3>
            <span>Product Lead, NovaSoft Ltd.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
