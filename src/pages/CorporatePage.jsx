import React, { useEffect, useState } from "react";
import styles from "../styles/Corporate/CorporatePage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import mobileCarouselImages from '../../JSONs/Mice Phone View.json'
import poster from "/videoPosters/corporateLandingPoster.png";

import { Link } from "react-router";
function CorporatePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <CorporateCarousel /> */}

      <div className={styles.landingVideoContainer}>
        <NavBar />
       {!isMobile && ( <video
          poster={poster}
          src="https://res.cloudinary.com/duh71fcas/video/upload/v1754072438/Exotic%20data/Videos/corporate.mp4"
          muted
          autoPlay
          loop></video>)}
    
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.carouselContentContainer}>
          <div className={styles.carouselSubContainer}>
            <motion.div
              initial={{ opacity: 0, translateX: -70 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={styles.contentContainerLeft}>
              <div className={styles.content}>
                <h1>Exotic Global MICE Solutions</h1>
                <p>
                  Event Management | Corporate Events | Special Occasions |
                  Global Corporate
                </p>
              </div>
              <header>We create experiences</header>
              <p className={styles.address}>India, Goa</p>
              <Link
                className={styles.homeContactUsBtnContainer}
                to={"/contact-us"}>
                <a className={styles.homeContactUsBtn} href="">
                  Contact Us
                </a>
              </Link>
            </motion.div>

            <motion.h5
              initial={{ opacity: 0, translateX: 70 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              Where vision meets precision <br />
              crafting world-class experiences globally.
            </motion.h5>
          </div>
        </motion.div>
        {isMobile && (<Slider {...settings} className={styles.slider}>
        {mobileCarouselImages.map((img, index) => {
          return (
            <div key={index} className={styles.imgsSlide}>
              <img src={img} alt={img} />
            </div>
          );
        })}
      </Slider>)}
      </div>

      <div className={styles.corporateContainer}>
        <div className={styles.titleContainer}>
          <h2 data-aos="fade-up" data-aos-once="true">
            {" "}
            Begin Your Event or Meetings With Us Here
          </h2>
          <div
            className={styles.subtitleContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}>
            <div className={styles.subtitleBar}></div>
            <span>
              Share your event details with us, and we'll reach out to
              collaboratively play this together
            </span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>

        <span data-aos="fade-up" data-aos-once="true">
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
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}
            className={styles.reelContainer}>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754125659/Exotic%20data/Corporate%20Page/An_wXfZ5MW0CJ7KfVD00P1WdEYYmh9N-8xFuBXdoMFeaUMrDPuOxTlXHFJHobyVbWA-KWD3-TwMFZZc3qeUjrApi_plxwrc.mp4"
              }></video>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={200}
            className={`${styles.reelContainer}  ${styles.wideReel}`}>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754144971/Exotic%20data/Corporate%20Page/EVENT_SHOOT_jhqghq.mp4"
              }></video>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}
            className={styles.reelContainer}>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754125661/Exotic%20data/Corporate%20Page/instasave_2_f67bte.mp4"
              }></video>
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
          <h2 data-aos="fade-up" data-aos-once="true">
            Our Work For Indian Navy
          </h2>
          <div
            className={styles.subtitleContainer}
            data-aos="fade-up"
            data-aos-once="true">
            <div className={styles.subtitleBar}></div>
            <span>
              Crafting Unforgettable Events with Precision & Honor – Proudly
              Serving the Navy with Excellence!
            </span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>

        <div
          className={styles.navyReelContainer}
          data-aos="fade-up"
          data-aos-once="true">
          <video
            autoPlay
            loop
            muted
            controls
            poster={poster}
            src="https://res.cloudinary.com/duh71fcas/video/upload/v1754072438/Exotic%20data/Videos/corporate.mp4"></video>
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

export default CorporatePage;
