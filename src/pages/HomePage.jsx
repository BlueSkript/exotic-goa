import React from "react";

import styles from "../styles/Home/Home.module.css";
import WeddingHomeCarousel from "../components/Home/WeddingHomeCarousel";
import HomeCarousel from "../components/HomeCarousel";
import HeadingTItle from "../components/Home/HeadingTItle";
import CorporateCarousel from "../components/Home/CorporateCarousel";
import PortfolioImg from "../components/Home/PortfolioImg";
import { FaInstagram } from "react-icons/fa";

function HomePage() {
  const instagramPosts = [
    {
      link: "https://www.instagram.com/p/C94s9_nJpml/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img1.heic",
    },
    {
      link: "https://www.instagram.com/p/DB3FS8aJcEC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img2.heic",
    },
    {
      link: "https://www.instagram.com/p/DCET6CSPSmU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img3.heic",
    },
    {
      link: "https://www.instagram.com/p/DDtPXcgP2S3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img4.heic",
    },
    {
      link: "https://www.instagram.com/p/DBtNIWnofdj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img5.jpg",
    },
    {
      link: "https://www.instagram.com/p/DBtNIWnofdj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/exotic-instagram-img6.jpg",
    },
  ];

  return (
    <>
      <HomeCarousel />
      <div className={styles.weddingsSection}>
        <HeadingTItle
          key={"wedding"}
          title={"Weddings"}
          subtitle={"Our Best Memories"}
        />
        <div className={styles.weddingDescriptionHome}>
          <p>
            Envision the wedding of your dreams against the backdrop of the
            white sandy beaches of Goa?. This is what we can do for you! Our
            specialization lies in creating once-in-a-lifetime experiences not
            only for the treasured couple but also for their special guests.
            <br /> <br />
            Our events leave attendees with cherished memories with their
            nearest and dearest. Collaborating with clients who want to share
            unforgettable moments with their family and friends is a priviledge
            we truly embrace.
          </p>
        </div>
        <WeddingHomeCarousel />
      </div>

      <div className={styles.corporateContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle
          key={"corporate"}
          title={"Corporate"}
          subtitle={"Our Best Memories"}
        />
        <div className={styles.corporateDescContainer}>
          <p>
            Elevate leadership with strategic corporate events, fostering
            colloboration and culture. Employees feel appreciated and build
            stronger connections when they come together, resulting in an
            enhanced quality of work. Our events are meticulously planned so as
            to spark creativity that contributes to company success. <br />
            <br /> Choose us as your partner to educate employees or clients,
            promote brand awareness, celebrate achievements, boost employee
            morale, strengthen team dynamics, facilitate networking, or launch a
            new product or service.
          </p>
        </div>
        <CorporateCarousel />
      </div>

      <div className={styles.portfolioContainer}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Portfolio"} subtitle={"Our Best Memories"} />
        <PortfolioImg />
      </div>

      <div className={styles.ourFeaturedContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Our Featured"} subtitle={"What Makes Us Shine"} />

        <div className={styles.reelsContainer}>
          {/* <img
            src="/dividers/border.svg"
            alt="border"
            className={styles.reelBorderOne}
          />
          <img
            src="/dividers/border.svg"
            alt="border"
            className={styles.reelBorderTwo}
          /> */}
          <video
            src={"/reels/reel1.mp4"}
            className={styles.reel}
            autoPlay
            loop
            muted></video>
          <video
            src={"/reels/reel1.mp4"}
            className={styles.reel}
            autoPlay
            loop
            muted></video>
          <video
            src={"/reels/reel1.mp4"}
            className={styles.reel}
            autoPlay
            loop
            muted></video>
          <video
            src={"/reels/reel1.mp4"}
            className={styles.reel}
            autoPlay
            loop
            muted></video>
        </div>
      </div>

      <div className={styles.instagramSection}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />

        <div className={styles.titleContainer}>
          <h2>Instagram</h2>
          <div className={styles.subtitleContainer}>
            <div className={styles.subtitleBar}></div>
            <span>Our Latest</span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>
        <div className={styles.instagramImgConainer}>
          {instagramPosts.map((post, index) => {
            return (
              <div className={styles.instagramImgDiv} key={`${post} ${index}`}>
                <a href={post.link} target="_blank">
                  <FaInstagram className={styles.instagramImgDivIcon} />
                </a>
                <img src={post.imgSrc} alt="exotic-goa-instagram-picture" />
              </div>
            );
          })}
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

export default HomePage;
