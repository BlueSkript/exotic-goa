import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Services/ServicesCard.module.css";
function ServicesCard({ title, subtitle, icon, handleCardClick, index, move }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX : -70 }}
      animate={{ opacity: 1 , translateX :0}}
      transition={{ duration: 1, ease: "easeInOut" }}
      onMouseDown={() => {
        handleCardClick(index);
      }}
      className={`${styles.servicecard} ${
        move == true ? styles.transform : ""
      }`}>
      <span className={styles.iconContiner}>
        <img src={icon} alt="exotic-goa-services" />
      </span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </motion.div>
  );
}

export default ServicesCard;
