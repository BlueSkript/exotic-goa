import React from "react";
import styles from "../../styles/Services/ServicesCard.module.css";
function ServicesCard({
  title,
  subtitle,
  icon,
  handleCardClick,
  index,
  move,
}) {
  return (
    <div
      onMouseDown={() => {
        handleCardClick(index);
      }}
      className={`${styles.servicecard} ${move == true ? styles.transform : ''}`}>
      <span className={styles.iconContiner}>
        <img src={icon} alt="exotic-goa-services" />
      </span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default ServicesCard;
