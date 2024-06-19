import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';
const Contact = () => {
  return (
    <footer className={styles.container} id='contacts'>
      <div className={styles.text}>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/email.png')} alt='email' />
          <a href='https://mail.google.com/' target='blank'>
            albinabraham17@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          
          <img src={getImageUrl('contact/linkedin.png')} alt='email' />
          <a
            href='https://www.linkedin.com/in/albin-abraham-a03348220'
            target='blank'
          >
            linkedin.com/in/albin-abraham
          </a>
        </li>
        <li className={styles.link}>
         
          <img src={getImageUrl('contact/github.png')} alt='email' />
          <a href='https://github.com/albinabraham1616' target='blank'>
            github.com/albinabraham1616
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
