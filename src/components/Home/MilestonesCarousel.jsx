import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home/MilestonesCarousel.module.css";

import img10 from "/temp/10.jpg";
import img11 from "/temp/11.jpg";
import img13 from "/temp/13.jpg";
import img21 from "/temp/21.webp";
import img19 from "/temp/19.webp";
import img20 from "/temp/20.webp";

const images = [
  { src: img10, text: "Exotic Goa" },
  { src: img11, text: "Exotic Goa Hospitality" },
  { src: img13, text: "Exotic Goa Decor" },
  { src: img21, text: "Exotic Goa MICE" },
  { src: img19, text: "Exotic Goa Furniture" },
  { src: img20, text: "Exotic Goa Events" },
];

export default function MilestonesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the center image index

  const getVisibleSlides = () => {
    return [
      (currentIndex - 2 + images.length) % images.length, // Leftmost
      (currentIndex - 1 + images.length) % images.length, // Left
      currentIndex, // Center
      (currentIndex + 1) % images.length, // Right
      (currentIndex + 2) % images.length, // Rightmost
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
        const isLeftmost = index === visibleSlides[0];
        const isLeft = index === visibleSlides[1];
        const isCenter = index === visibleSlides[2];
        const isRight = index === visibleSlides[3];
        const isRightmost = index === visibleSlides[4];

        return (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              isCenter
                ? styles.center
                : isLeft
                ? styles.left
                : isRight
                ? styles.right
                : isLeftmost
                ? styles.leftmost
                : isRightmost
                ? styles.rightmost
                : styles.hidden
            }`}>
            <img src={img.src} alt={`Slide ${index}`} />
          </div>
        );
      })}
    </div>
  );
}
