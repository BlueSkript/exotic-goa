import React from "react";
import styles from "../styles/Gallery.module.css";
import NavBar from "../components/NavBar";
function Gallery() {
  const images = [
    "/temp/1.webp",
    "/temp/2.webp",
    "/temp/3.webp",
    "/temp/4.jpg",
    "/temp/5.jpg",
    "/temp/6.jpg",
    "/temp/7.jpg",
    "/temp/8.jpg",
    "/temp/9.jpg",
    "/temp/10.jpg",
    "/temp/11.jpg",
    "/temp/12.jpg",
    "/temp/13.jpg",
    "/temp/14.jpg",
    "/temp/15.jpg",
    "/temp/16.jpg",
    "/temp/17.jpg",
    "/temp/18.jpg",
    "/temp/19.webp",
    "/temp/20.webp",
    "/temp/21.webp",
    "/temp/22.webp",
    "/temp/23.webp",
    "/temp/24.webp",
    "/temp/25.jpg",
    "/Pictures/shal0071.jpg",
    "/Pictures/shal0315.jpg",
    "/Pictures/home-wedding-picture-exotic-goa-one.jpg",
    "/Pictures/home-wedding-picture-exotic-goa-three.jpg",
    "/Pictures/home-wedding-picture-exotic-goa-two.jpg",
    "/Pictures/shal0325.jpg",
  ];
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
        <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        />
      </div>
    </>
  );
}

export default Gallery;
