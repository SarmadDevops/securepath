import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <section className={styles.topbar}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.left}>
            <span>📧 <a href="mailto:support@securepath.pk">support@securepath.pk</a></span>
            <span className={styles.dot}></span>
            <span>🕘 Working Hours: Mon–Fri, 9:00am–6:00pm</span>
          </div>
          <div className={styles.right}>
            <div className={styles.socials}>
              <a href="#">Fb</a>
              <a href="#">X</a>
              <a href="#">Yt</a>
              <a href="#">In</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
