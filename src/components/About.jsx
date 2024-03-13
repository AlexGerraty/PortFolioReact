import React from 'react';
import styles from './About.modules.css';

function About() {
  return (
    <div className={styles.about}>
      <img
        src="/me.png"
        alt="John Doe"
        className="avatar"
/>
      <p className='description'>
        I'm Alex Gerraty, a web developer with experience in both Front-end and Back-end development. I specialize in building responsive and user-friendly
        websites.
      </p>
    </div>
  );
}

export default About;