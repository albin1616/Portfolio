import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
// import { ScrollPage } from '../PageScroll/PageScroll';
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (

    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        PortFolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? 
            getImageUrl('nav/closeIcon.png'):
            getImageUrl('nav/menuIcon.png')
        }
          alt='menu-button'
          onClick={()=>setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setMenuOpen(false)}
        >
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experince'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contacts'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;