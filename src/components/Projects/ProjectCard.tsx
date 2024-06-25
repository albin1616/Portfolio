import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
const ProjectCard = ({ project: { title, imageSrc, description } }: any) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt='project'
        className={styles.projImage}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
