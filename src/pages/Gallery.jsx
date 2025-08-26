import React from "react";
import styles from "../styles/Gallery.module.css";
import NavBar from "../components/NavBar";
import images from '../../JSONs/Gallery.json'
function Gallery() {
  
  return (
    <>
      <NavBar />
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
    </>
  );
}

export default Gallery;
