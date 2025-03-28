import React, { useEffect, useState } from "react";
import styles from "../../styles/Services/VerticalCarousel.module.css";

export default function VerticalCarousel({images}) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center image

  const getVisibleSlides = () => {
    return [
      (currentIndex - 2 + images.length) % images.length, // Topmost
      (currentIndex - 1 + images.length) % images.length, // Above center
      currentIndex, // Center
      (currentIndex + 1) % images.length, // Below center
      (currentIndex + 2) % images.length, // Bottommost
    ];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleSlides = getVisibleSlides();

  return (
    <div className={styles.carouselContainer}>
      {images.map((img, index) => {
        const isTopmost = index === visibleSlides[0];
        const isAbove = index === visibleSlides[1];
        const isCenter = index === visibleSlides[2];
        const isBelow = index === visibleSlides[3];
        const isBottommost = index === visibleSlides[4];

        return (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              isCenter
                ? styles.center
                : isAbove
                ? styles.above
                : isBelow
                ? styles.below
                : isTopmost
                ? styles.topmost
                : isBottommost
                ? styles.bottommost
                : styles.hidden
            }`}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        );
      })}
    </div>
  );
}
