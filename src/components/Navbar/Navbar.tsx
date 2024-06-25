import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { useAnimate } from 'framer-motion';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scope, animate] = useAnimate();
  const [isResponsive, setIsResponsive] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isResponsive) {
      if (menuOpen) {
        animate(scope.current, { opacity: 1, x: 0 }, { duration: 0.5 });
      } else {
        animate(scope.current, { opacity: 0, x: -100 }, { duration: 0.5 });
      }
    }
  }, [menuOpen, isResponsive, animate, scope]);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        PortFolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          ref={scope}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className={styles.navbarMenuItems} href='#about'>
              About
            </a>
          </li>
          <li>
            <a className={styles.navbarMenuItems} href='#experince'>
              Experience
            </a>
          </li>
          <li>
            <a className={styles.navbarMenuItems} href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a className={styles.navbarMenuItems} href='#contacts'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
