import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Comprehensive Insurance for Families & Businesses</div>
          <h1 className={styles.h1}>Secure your path with smart, reliable coverage</h1>
          <p className={styles.sub}>
            From auto to health and travel, Secure Path Solutions brings transparent plans,
            fast claims, and human support—so you can move forward with confidence.
          </p>

          <div className={styles.ctaRow}>
            <a href="#quote" className={`${styles.btn} ${styles.primary}`}>Free Consultation »</a>
            <a href="#plans" className={`${styles.btn} ${styles.ghost}`}>Explore Plans</a>

            <div className={styles.testi}>
              <div className={styles.faces}>
                <span className={styles.face}></span>
                <span className={styles.face}></span>
                <span className={styles.face}></span>
                <span className={styles.face}></span>
              </div>
              <div>
                <strong>12k+ happy policyholders</strong>
                <small>Real service. Real savings.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
