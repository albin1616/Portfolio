import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
const ProjectCard = ({
  project: { title, imageSrc, description, source },
}: any) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt='project'
        className={styles.projImage}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a href={source} className={styles.sourceBtn} target='blank'>
        Source
      </a>
    </div>
  );
};

export default ProjectCard;
