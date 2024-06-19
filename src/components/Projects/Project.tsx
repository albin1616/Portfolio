import React from 'react';
import styles from './Project.module.css';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects.json';
const Project = () => {
  return (
    <section className={styles.container} id='projects'>
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.project}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
