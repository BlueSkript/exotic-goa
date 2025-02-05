import React, { useEffect, useState } from "react";
import styles from "../../styles/Services/VerticalCarousel.module.css";


const VerticalCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleSlides = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [prevIndex, currentIndex, nextIndex];
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
        const isCenter = index === visibleSlides[1];
        const isTop = index === visibleSlides[0];
        const isBottom = index === visibleSlides[2];

        return (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              isCenter
                ? styles.center
                : isTop
                ? styles.top
                : isBottom
                ? styles.bottom
                : styles.hidden
            }`}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCarousel;
