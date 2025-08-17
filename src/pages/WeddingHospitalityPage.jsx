import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/WeddingHospitality/WeddingHospitality.module.css";
function WeddingHospitalityPage() {
  return (
    <>
      <NavBar />
      <div className={styles.bannerContainer}>
        {/* <img
          src="/home-wedding-picture-exotic-goa-two.jpg"
          alt="exotic-goa-banner"
        /> */}
        <h2>Exotic Goa</h2>
        <header>Real Weddings</header>
        <span>Real Couples, Real Inspiration</span>
      </div>

      <div className={styles.WeddingHospitalityMainContainer}>
        <div className={`${styles.section} ${styles.sectionOne}`}>
          <h4>Wedding Culture</h4>
          <img src="/temp/21.webp" alt="" />
          <div className={`${styles.galleryContainer} `}>
            <img src="/temp/14.jpg" alt="" />
            <img src="/temp/14.jpg" alt="" />
          </div>
        </div>
        <div className={`${styles.section} ${styles.sectionOne}`}>
          <h4>E-Invites</h4>
          <img src="/temp/24.webp" alt="" />
          <div className={`${styles.galleryContainer} `}>
            <img src="/temp/12.jpg" alt="" />
            <img src="/temp/11.jpg" alt="" />
          </div>
        </div>
        <div className={`${styles.section} ${styles.sectionOne}`}>
          <h4>Wardrobe Planner</h4>
          <img src="/temp/20.webp" alt="" />
          <div className={`${styles.galleryContainer} `}>
            <img src="/temp/16.jpg" alt="" />
            <img src="/temp/13.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingHospitalityPage;
