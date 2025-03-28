import { useState } from "react";
import styles from "../../styles/Home/PortfolioGallery.module.css";

import img1 from "/public/temp/10.jpg";
import img2 from "/public/temp/9.jpg";
import img3 from "/public/temp/13.jpg";
import img4 from "/public/temp/21.webp";
import img5 from "/public/temp/19.webp";

const images = [
  { src: img1, text: "Exotic Goa " },
  { src: img2, text: "Exotic Goa hospitality" },
  { src: img3, text: "Exotic Goa Decor" },
  { src: img4, text: "Exotic Goa Mice" },
  { src: img5, text: "Exotic Goa Furniture" },
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
