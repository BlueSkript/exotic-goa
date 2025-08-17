import React from "react";
import styles from "../styles/MoodBoard.module.css";
import NavBar from "./NavBar";
import mood1 from "/moodboard/moodboard2.jpg";

import mood2 from "/moodboard/moodboard4.jpg";
import mood3 from "/moodboard/moodboard5.jpg";
import mood4 from "/moodboard/moodboard3.jpg";
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
              <img src={"https://res.cloudinary.com/duh71fcas/image/upload/v1754072589/Exotic%20data/Moodboard/moodboard2.webp"} alt="exotic-moodboard" />
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
              <img src={"https://res.cloudinary.com/duh71fcas/image/upload/v1754072592/Exotic%20data/Moodboard/moodboard4.webp"} alt="exotic-moodboard" />
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
              <img src={"https://res.cloudinary.com/duh71fcas/image/upload/v1754072591/Exotic%20data/Moodboard/moodboard5.webp"} alt="exotic-moodboard" />
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
              <img src={"https://res.cloudinary.com/duh71fcas/image/upload/v1754072588/Exotic%20data/Moodboard/moodboard3.webp"} alt="exotic-moodboard" />
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
      
      </div>
    </>
  );
}

export default MoodBoard;
