import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/PopupGallery.module.css";

export default function PopupGallery({ images, onClose }) {
  useEffect(() => {
 
    document.body.classList.add("body-lock");
    return () => {
      document.body.classList.remove("body-lock");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>
      <div className={styles.galleryContainer}>
        <div className={styles.container}>
          <div className={styles.gallery}>
            {images.map((img, index) => {
              return (
                <img
                  src={img}
                  alt="exotic-goa"
                  width="100%"
                  height="auto"
                  class={styles.galleryimg}
                />
              );
            })}
          </div>
        </div>
        
      </div>
    </div>,
    document.body
  );
}
