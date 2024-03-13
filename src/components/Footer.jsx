import React from 'react';
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/AlexGerraty"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-gerraty-642b95267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>
        </li>
      </ul>
      <h4>Powered by Alex Gerraty</h4>
    </footer>
  );
}

export default Footer;