import React from "react";
import styles from "../styles/MoodBoard.module.css";
import NavBar from "./NavBar";
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
                src="/public/moodboard/moodboard2.jpg"
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
                src="/public/moodboard/moodboard4.jpg"
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
                src="/public/moodboard/moodboard5.jpg"
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
                src="/public/moodboard/moodboard3.jpg"
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
