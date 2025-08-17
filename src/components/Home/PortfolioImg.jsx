import React from "react";

import styles from "../../styles/Home/PortfolioImg.module.css";

function PortfolioImg() {
  const images = [];
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.imgsContainer}>
        <header>Weddings</header>
        <img
          className={styles.underline}
          src="/dividers/underline.svg"
          alt="underline"
        />
        <div
          className={`${styles.weddingsPortfolioContainer} ${styles.imgsSubContainer}`}>
          {images.map((img, index) => {
            return (
              <div className={styles.imgBox} key={`${img} ${index}`}>
                <img src={img} alt={img} className={styles.subImages} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.imgsContainer}>
        <header>Mice Corporate</header>
        <img
          className={styles.underline}
          src="/dividers/underline.svg"
          alt="underline"
        />
        <div
          className={`${styles.miceSolutionsPortfolioContainer} ${styles.imgsSubContainer}`}>
          {images["portfolioMiceCorporate"].map((img, index) => {
            return (
              <div className={styles.imgBox} key={`${img} ${index}`}>
                <img src={img} alt={img} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.imgsContainer}>
        <header>Hospitality</header>
        <img
          className={styles.underline}
          src="/dividers/underline.svg"
          alt="underline"
        />
        <div
          className={`${styles.hospitalityPortfolioContainer} ${styles.imgsSubContainer}`}>
          {images["portfolioHospitality"].map((img, index) => {
            return (
              <div className={styles.imgBox} key={`${img} ${index}`}>
                <img src={img} alt={img} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.imgsContainer}>
        <header>Luxury Furniture</header>
        <img
          className={styles.underline}
          src="/dividers/underline.svg"
          alt="underline"
        />
        <div
          className={`${styles.luxuryFurniturePortfolioContainer} ${styles.imgsSubContainer}`}>
          {images["portfolioLuxuryFuniture"].map((img, index) => {
            return (
              <div className={styles.imgBox} key={`${img} ${index}`}>
                <img src={img} alt={img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioImg;
