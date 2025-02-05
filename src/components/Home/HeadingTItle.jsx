import React from "react";

import styles from "../../styles/Home/HeadingTitle.module.css";
function HeadingTItle({ title, subtitle }) {
  return (
    <div className={styles.titleContainer}>
      <h2>{title}</h2>
      <div className={styles.subtitleContainer}>
        <div className={styles.subtitleBar}></div>
        <span>{subtitle}</span>
        <div className={styles.subtitleBar}></div>
      </div>
    </div>
  );
}

export default HeadingTItle;
