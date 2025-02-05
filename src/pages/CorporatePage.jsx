import React from "react";
import styles from "../styles/Corporate/CorporatePage.module.css";
import CorporateCarousel from "../components/Corporate/CorporateCarousel";
import HeadingTItle from "../components/Home/HeadingTItle";
function CorporatePage() {
  return (
    <>
      <CorporateCarousel />

      <div className={styles.corporateContainer}>
        <div className={styles.titleContainer}>
          <h2>Begin Your Event or Meetings With Us Here</h2>
          <div className={styles.subtitleContainer}>
            <div className={styles.subtitleBar}></div>
            <span>
              Share your event details with us, and we'll reach out to
              collaboratively play this together{" "}
            </span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>

        <span>
          At Exotic Goa Events, we understand the multifacted nature of
          corporate events, each having their own goals and objectives. An event
          that is successful is coupled with a conception of its purpose,
          choosing an appropriate venue, logistics, audience definition,
          preparing a budget and finally crafting together a theme with the
          format. We are here to offer you an end-to-end solution, where Exotic
          MICE Global handles every feaure of the event
          <br />
          <br />
          Our range of services include pre-event planning, extensive venue
          research, smooth logistics, catering arrangements and diligent setup.
          Besides this, we are look into stage design, artist and speaker
          management, precise sound and lighting arrangements, thematic gala
          dinners and engaging team building activities as well. Our holistic
          approach not only establishes us as the leading corporate management
          company in Goa but also re-inforces us at the go-to corpoarte event
          planner.
        </span>

        <div className={styles.weddingsReelsContainer}>
          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Mice Corporate</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>

          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Product Launch</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>
          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Social Events</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>
        </div>
      </div>

      <div className={styles.navyContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <div className={styles.titleContainer}>
          <h2>Our Work For Navy</h2>
          <div className={styles.subtitleContainer}>
            <div className={styles.subtitleBar}></div>
            <span>
              Crafting Unforgettable Events with Precision & Honor – Proudly
              Serving the Navy with Excellence!
            </span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>

        <div className={styles.navyReelContainer}>
          <img src="/Pictures/shal0071.jpg"></img>
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

export default CorporatePage;
