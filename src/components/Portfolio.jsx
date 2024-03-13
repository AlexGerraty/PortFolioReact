import React from 'react';
import styles from './Portfolio.module.css'
function Portfolio() {
  const projects = [
    {
      title: 'Designer Days',
      deployed:'https://designerdays.onrender.com',
      github: 'https://github.com/AlexGerraty/designerdays',
    },
    {
      title: 'Project 2',
      deployed: 'https://example.com/project2',
      github: 'https://github.com/johndoe/project2',
    },
    {
      title: 'Project 3',
      deployed: 'https://example.com/project3',
      github: 'https://github.com/johndoe/project3',
    },
  
  ];

  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <br></br>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;