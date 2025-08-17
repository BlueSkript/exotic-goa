import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home/MilestonesCarousel.module.css";
import images from '../../../JSONs/Milestones.json'




export default function MilestonesCarousel() {
  return (
    <div className={styles.carouselContainer}>
      {images.map((img, index) => {
        return <img src={img} alt={`Slide ${index}`} />;
      })}
    </div>
  );
}
