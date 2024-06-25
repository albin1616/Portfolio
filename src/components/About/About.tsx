import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt='front-end' />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a front-end developer with experience,
                <br />
                in building responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt='front-end' />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and <br /> optimised back-end
                systems and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
