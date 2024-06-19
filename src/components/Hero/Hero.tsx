import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';
interface CustomCSSProperties extends React.CSSProperties {
  '--stagger'?: number;
}
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Albin</h1>
        {COPY.map((copy, index) => (
          <p
            key={copy}
            style={{ '--stagger': index + 1 } as CustomCSSProperties}
            className={styles.description}
          >
            {copy}
          </p>
        ))}
        <a className={styles.contactBtn} href='albinabraham17@gmail.com'>
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl('hero/myprofile.png')}
        alt='profile'
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
const COPY = [
  `I’m a full-stack developer with one years of experience using React and NodeJS.`,
  `Developed strong proficiency in building scalable and maintainable web applications.`,
  `Reach out if you’d like to learn more!!.`,
];

export default Hero;
