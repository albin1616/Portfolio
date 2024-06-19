import { motion, useScroll } from "framer-motion"
import styles from './PageScroll.module.css'
 export function ScrollPage() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }}  className={styles.page}/>  
  )
}