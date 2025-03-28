import { useState } from "react";
import styles from "../../styles/Home/PortfolioGallery.module.css";

const images = [
  { src: "/public/temp/10.jpg", text: "Exotic Goa " },
  { src: "/public/temp/9.jpg", text: "Exotic Goa hospitality" },
  { src: "/public/temp/13.jpg", text: "Exotic Goa Decor" },
  { src: "/public/temp/21.webp", text: "Exotic Goa Mice" },
  { src: "/public/temp/19.webp", text: "Exotic Goa Furniture" },
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
