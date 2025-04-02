import React from "react";
import styles from "../styles/MoodBoard.module.css";
import NavBar from "./NavBar";
import mood1 from '/public/moodboard/moodboard2.jpg'

import mood2 from '/public/moodboard/moodboard4.jpg'
import mood3 from "/public/moodboard/moodboard5.jpg"
import mood4 from "/public/moodboard/moodboard3.jpg"
function MoodBoard() {
  return (
    <>
      <NavBar />
      <div className={styles.moodboardContainer}>
        <div className={styles.headingContainer}>
          <h3>MoodBoard</h3>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            ullam distinctio, id sit eum eius ipsa harum recusandae, earum
            tempore in fuga numquam officia alias laudantium illum magnam
            molestiae ea?
          </span>
        </div>
        <div className={styles.moodboardSubContainer}>
          <div className={styles.moodboardCard}>
            <div className={styles.moodBoardImg}>
              <img
                src={mood1}
                alt="exotic-moodboard"
              />
            </div>

            <div
              className={`${styles.moodColorsContainer} ${styles.moodColorContainerOne}`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className={styles.moodboardCard}>
            <div className={styles.moodBoardImg}>
              <img
                src={mood2}
                alt="exotic-moodboard"
              />
            </div>

            <div
              className={`${styles.moodColorsContainer} ${styles.moodColorContainerTwo}`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.moodboardCard}>
            <div className={styles.moodBoardImg}>
              <img
                src={mood3}
                alt="exotic-moodboard"
              />
            </div>

            <div
              className={`${styles.moodColorsContainer} ${styles.moodColorContainerThree}`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.moodboardCard}>
            <div className={styles.moodBoardImg}>
              <img
                src={mood4}
                alt="exotic-moodboard"
              />
            </div>

            <div
              className={`${styles.moodColorsContainer} ${styles.moodColorContainerFour}`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        /> */}
      </div>
    </>
  );
}

export default MoodBoard;
