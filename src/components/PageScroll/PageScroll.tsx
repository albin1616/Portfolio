import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './PageScroll.module.css';

function ScrollPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div style={{ scaleX }} className={styles.progressbar} />;
}

export default ScrollPage;
