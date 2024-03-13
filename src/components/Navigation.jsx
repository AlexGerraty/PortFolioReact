import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navigation.module.css'
function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link activeClass={styles.active} to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link activeClass={styles.active} to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link activeClass={styles.active} to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link activeClass={styles.active} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navigation;