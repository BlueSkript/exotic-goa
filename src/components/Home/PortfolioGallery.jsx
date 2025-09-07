import { useState } from "react";
import styles from "../../styles/Home/PortfolioGallery.module.css";
import decorGallery from '../../../JSONs/PortfolioDecorGallery.json';
import hospitalityGallery from '../../../JSONs/PortfolioHospitalityGallery.json';
import miceGallery from '../../../JSONs/PortfolioMiceGallery.json';
import PopupGallery from "../PopupGallery";

export default function PortfolioGallery() {
  const images = [
    
    {
      src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067216/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0023.webp",
      text: "Exotic Goa Hospitality",
      gallery: hospitalityGallery
    },
    {
      src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067255/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0027.webp",
      text: "Exotic Goa Decor",
      gallery: decorGallery
    },
    {
      src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067246/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0024.webp",
      text: "Exotic Goa Mice",
      gallery: miceGallery
    },
    {
      src: "https://res.cloudinary.com/duh71fcas/image/upload/v1754067240/Exotic%20Data/Home%20Page/Portfolio/IMG-20250528-WA0019.webp",
      text: "Exotic Goa Furniture",
      gallery: [], 
    },
  ];

  const [selectedGallery, setSelectedGallery] = useState(null);

  const openGallery = (item) => {
    if (item.gallery.length > 0) setSelectedGallery(item.gallery);
  };

  const closePopup = () => setSelectedGallery(null);

  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.imageWrapper} ${image.gallery.length === 0 ? styles.disabled : ''}`}
          onClick={() => openGallery(image)}
        >
          <img src={image.src} alt={image.text} className={styles.image} />
          <div className={styles.imageTextInactive}>{image.text}</div>
        </div>
      ))}

      {selectedGallery && (
        <PopupGallery images={selectedGallery} onClose={closePopup} />
      )}
    </div>
  );
}
