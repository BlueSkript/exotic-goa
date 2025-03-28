import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/Home/HeadingTitle.module.css";

function HeadingTitle({ title, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY : 0 }}
      animate={
        isInView
          ? { opacity: 1, translateY: -20 }
          : { opacity: 0, translateY: 0 }
      }
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.titleContainer}>
      <h2>{title}</h2>
      <div className={styles.subtitleContainer}>
        <div className={styles.subtitleBar}></div>
        <span>{subtitle}</span>
        <div className={styles.subtitleBar}></div>
      </div>
    </motion.div>
  );
}

export default HeadingTitle;
