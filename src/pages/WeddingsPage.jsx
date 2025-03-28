import React from "react";
import WeddingsCarousel from "../components/weddings/WeddingsCarousel";
import HeadingTItle from "../components/Home/HeadingTItle";
import styles from "../styles/weddings/WeddingsPage.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";
import img10 from "/temp/10.jpg";
import img11 from "/temp/11.jpg";
import img13 from "/temp/13.jpg";
import img21 from "/temp/21.webp";
import img19 from "/temp/19.webp";
import img20 from "/temp/20.webp";

const images = [
  { src: img10, text: "Exotic Goa" },
  { src: img11, text: "Exotic Goa Hospitality" },
  { src: img13, text: "Exotic Goa Decor" },
  { src: img21, text: "Exotic Goa MICE" },
  { src: img19, text: "Exotic Goa Furniture" },
  { src: img20, text: "Exotic Goa Events" },
  { src: img10, text: "Exotic Goa" },
  { src: img11, text: "Exotic Goa Hospitality" },
  { src: img13, text: "Exotic Goa Decor" },
  { src: img21, text: "Exotic Goa MICE" },
  { src: img19, text: "Exotic Goa Furniture" },
  { src: img20, text: "Exotic Goa Events" },
  { src: img10, text: "Exotic Goa" },
  { src: img11, text: "Exotic Goa Hospitality" },
  { src: img13, text: "Exotic Goa Decor" },
  { src: img21, text: "Exotic Goa MICE" },
  { src: img19, text: "Exotic Goa Furniture" },
  { src: img20, text: "Exotic Goa Events" },
];
const speed = 30;
function WeddingsPage() {
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    setDuplicatedItems([...images, ...images]);
  }, [images]);

  return (
    <>
      <WeddingsCarousel />

      <div className={styles.weddingsInGoaContainer}>
        <HeadingTItle
          title={"Weddings in Goa"}
          subtitle={"Your Dream Destination"}
        />
        <p>
          What could be more enchanting than the fresh sea breeze blowing across
          your face? A vibrant sunset painting that can be your perfect backdrop
          or the soft sand beneath your feet? Not to forget even the gentle
          sound of the waves crashing nearby? Your dream wedding awaits you in
          Goa
        </p>

        <div className={styles.weddingsReelsContainer}>
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
          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Haldi</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>
          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Mehendi</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>

          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Sangeet</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>
          <div className={styles.reelContainer}>
            <header className={styles.reelHeadijng}>Wedding</header>
            <video
              autoplay="true"
              loop
              muted
              controls
              src="/reels/reel1.mp4"></video>
          </div>
        </div>
      </div>

      {/* <div className={styles.portfolioContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Portfolio"} subtitle={"Our Best Memories"} />

        <div className={styles.portfolio}>
          <div className={styles.portfolioOne}>
            <div className={styles.portfolioRowOne}>
              <div className={styles.portfolioCardHeadingContainer}>
                <img
                  src="/dividers/frameBorder.svg"
                  alt="card-border"
                  className={styles.cardTopBorder}
                />
                <header>
                  Rohan <br /> <br />
                  & <br />
                  <br />
                  Asmita
                </header>
                <img
                  src="/dividers/frameBorder.svg"
                  alt="card-border"
                  className={styles.cardBottomBorder}
                />
              </div>

              <div className={styles.imgsSectionOne}>
                <div className={styles.rowOneImgContainer}>
                  <img src="/temp/11.jpg" alt="" />
                </div>
                <div className={styles.rowOneImgContainer}>
                  <img src="/temp/12.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className={`${styles.rowTwo} ${styles.rowTwoPortfolioTwo}`}>
              <div className={styles.rowTwoSub}>
                <div className={styles.rowTwoImgContainer}>
                  <img src="/temp/9.jpg" alt="" />
                </div>
                <div className={styles.rowTwoImgContainer}>
                  <img src="/temp/10.jpg" alt="" />
                </div>
              </div>
              <header>
                "Every love story deserves to be beautifully told."
              </header>
            </div>
          </div>
          <div className={styles.portfolioOne}>
            <div className={styles.portfolioRowOne}>
              <div className={styles.imgsSectionOne}>
                <div className={styles.rowOneImgContainerTwo}>
                  <img src="/temp/6.jpg" alt="" />
                </div>
                <div className={styles.rowOneImgContainerTwo}>
                  <img src="/temp/7.jpg" alt="" />
                </div>
              </div>
              <div className={styles.portfolioCardHeadingContainer}>
                <img
                  src="/dividers/frameBorder.svg"
                  alt="card-border"
                  className={styles.cardTopBorder}
                  style={{ color: "white" }}
                />
                <header>
                  Brandon <br /> <br />
                  & <br />
                  <br />
                  May
                </header>
                <img
                  src="/dividers/frameBorder.svg"
                  alt="card-border"
                  className={styles.cardBottomBorder}
                />
              </div>
            </div>

            <div className={`${styles.rowTwo} ${styles.rowTwoPortfolioTwo}`}>
              <div className={styles.rowTwoSub}>
                <div className={styles.rowTwoImgContainer}>
                  <img
                    className={styles.rowTowImgOne}
                    src="/public/temp/25.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.rowTwoImgContainer}>
                  <img src="/temp/24.webp" alt="" />
                </div>
              </div>
              <header>"Capturing timeless moments of love and joy."</header>
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.howWeDoItContainer}>
        <h5>How we do it</h5>

        <div className={styles.howWeDoItSubContainer}>
          <div className={styles.howWeDoItItemContainer}>
            <img src="/public/Pictures/howwedoitone.gif" alt="" />
            <header>Plan</header>
            <p>
              Once we’ve envisioned the story you wish to tell, we begin by
              meticulously planning everything, right from the venue to hampers
              and budget planning.
            </p>
          </div>
          <div className={styles.howWeDoItItemContainer}>
            <img src="/public/Pictures/howwedoittwo.gif" alt="" />
            <header>connect</header>
            <p>
              We make sure you’re equipped with the best artists in the
              business- skilled photographers, makeup artists, DJs and more,
              based on what’s right for you and your wedding.
            </p>
          </div>
          <div className={styles.howWeDoItItemContainer}>
            <img src="/public/Pictures/howwedoitthree.gif" alt="" />
            <header>Design</header>
            <p>
              Whether you’re looking for an extravagant or an intimate wedding,
              we beautifully craft everything from set design to sound, lights
              and flowers.
            </p>
          </div>
        </div>

        <div className={styles.getInTouchContainer}>
          <a href="">
            <h6>Get in touch</h6>
            <BsWhatsapp className={styles.whatsappicon} />
          </a>
        </div>
      </div>

      <div className={styles.venuesWeHaveWorkedWith}>
        <h4>Venues We Do Weddings At</h4>
        <div className={styles.carousel}>
          <div
            className={styles.carouseltrack}
            style={{ animationDuration: `${speed}s` }}>
            {duplicatedItems.map((item, index) => (
              <div className={styles.carouselitem} key={index}>
                <img src={item.src} alt={`Item ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.testimonialsContainer}>
        {/* <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        /> */}
        <h3>Testimonials</h3>

        <div className={styles.testimonialsSubContainer}>
          <img src="/Pictures/testimonialimg.jpeg" alt="" />
          <div className={styles.testimonialContent}>
            <span>
              I had an amazing experience planning my wedding with Exotic.
              They’re efficient, in the know, creative, caring, and passionate
              about what they do. I didn’t have to second guess their execution,
              which is what every bride stresses about. They did the wedding for
              us with the same affection and love that a family member would do.
              There were no cutting corners. They were always on our team, and
              meticulous in the process. I couldn’t recommend them more. Preeti
              from the team was especially amazing!
            </span>

            <header>- Maithili Parikh</header>
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

export default WeddingsPage;
