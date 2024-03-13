import React from 'react';
import styles from './Resume.module.css'
function Resume() {
  return (
    <div className={styles.resume}>
      <h2>Resume</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>GraphQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
      <a
        href="https://example.com/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;