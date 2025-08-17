import { useState } from "react";
import styles from "../../styles/Home/PortfolioGallery.module.css";

const images = [
  {
    src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067237/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0025.webp",
    text: "Exotic Goa ",
  },
  {
    src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067216/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0023.webp",
    text: "Exotic Goa hospitality",
  },
  {
    src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067255/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0027.webp",
    text: "Exotic Goa Decor",
  },
  {
    src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067246/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0024.webp",
    text: "Exotic Goa Mice",
  },
  {
    src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067240/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0019.webp",
    text: "Exotic Goa Furniture",
  },
];

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.imageWrapper} ${
            selectedImage === index ? styles.expanded : ""
          }`}
          onClick={() =>
            setSelectedImage(selectedImage === index ? null : index)
          }>
          <img
            src={image.src}
            alt={`Thumbnail ${index}`}
            className={styles.image}
          />
          {selectedImage === index && (
            <div className={styles.imageText}>{image.text}</div>
          )}

          {selectedImage != index && (
            <div className={styles.imageTextInactive}>{image.text}</div>
          )}
        </div>
      ))}
    </div>
  );
}
