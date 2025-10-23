import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.row}>
          <a className={styles.brand} href="/">
            <img src="https://i.ibb.co/YHkRGrb/Untitled-4-2.png" alt="Secure Path Solutions" />
            <span className={styles.name}>SecurePath <em>Solutions</em></span>
          </a>

          <div className={styles.nav}>
            <a href="#">Car</a>
            <a href="#">Bike</a>
            <a href="#">Health</a>
            <a href="#">Travel</a>
            <a href="#">Property</a>
          </div>

          <div className={styles.call}>
            <div className={styles.phone}>☎</div>
            <div><small>Urgent Call</small> +92 353 870 088</div>
          </div>

          <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>

        {open && (
          <div className={styles.mobile}>
            <a href="#">Car</a>
            <a href="#">Bike</a>
            <a href="#">Health</a>
            <a href="#">Travel</a>
            <a href="#">Property</a>
            <a className={styles.primary} href="#quote">Get a Quote</a>
          </div>
        )}
      </div>
    </nav>
  );
}
