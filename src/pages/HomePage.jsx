import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/Home/Home.module.css";
import WeddingHomeCarousel from "../components/Home/WeddingHomeCarousel";
import HomeCarousel from "../components/HomeCarousel";
import HeadingTItle from "../components/Home/HeadingTItle";
import CorporateCarousel from "../components/Home/CorporateCarousel";
import PortfolioGallery from "../components/Home/PortfolioGallery";
import MilestonesCarousel from "../components/Home/MilestonesCarousel";
import { FaInstagram } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";
function HomePage() {
  const weddingsRef = useRef(null);
  const isWeddingsInView = useInView(weddingsRef, {
    triggerOnce: true,
    margin: "-100px",
  });

  const aboutusRef = useRef(null);
  const isAboutUsInView = useInView(aboutusRef, {
    triggerOnce: true,
    margin: "-100px",
  });
  const founderRef = useRef(null);
  const isFounderInView = useInView(founderRef, {
    triggerOnce: true,
    margin: "-100px",
  });

  const corporateRef = useRef(null);
  const isCorporateInView = useInView(corporateRef, {
    triggerOnce: true,
    margin: "-100px",
  });

  const portfolioRef = useRef(null);
  const isPortfolioInView = useInView(portfolioRef, {
    triggerOnce: true,
    margin: "-100px",
  });

  const milestonesRef = useRef(null);
  const isMilestonesInView = useInView(milestonesRef, {
    triggerOnce: true,
    margin: "-100px",
  });
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

      <HeadingTItle
        key={"about"}
        title={"About Us"}
        subtitle={"Discover Goa, Experience Exotic"}
      />

      <motion.div
        ref={aboutusRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={isAboutUsInView ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.aboutUsLanding}>
        <div className={styles.aboutusLandingContainer}>
          <h3>"Where Everything Begins...."</h3>
          <p>
            Welcome to Exotic Goa Events, a luxurious event company situated in
            the city of Margao. We specialize in wedding planning, corporate
            events along with the entire production of events. Goa is nestled
            along side the beautiful coastal western coast of India bordering
            Maharashtra and Karnataka. Being based here, gives us an opportunity
            to showcase to your guests and you the history, culture and
            beautiful beaches. Our team is passionate about combining together
            all your dreams and wishes to create well-customised decor, setups
            and thematic preparations that make your vision come to a reality.
          </p>
        </div>

        <div className={styles.aboutusLandingContainer}>
          <h3>When did our journey begin?....</h3>
          <p>
            With 13 years of experience in the events industry, our founder,
            Seby Noronha, embarked on his own venture, Exotic Goa, in February
            2018. Our mission is to create meaningful experiences that bring
            people together through unforgettable events. With insight, empathy,
            and a service-first mindset at the core of our business, we ensure
            every event is crafted to perfection. From elegant weddings to grand
            corporate gatherings, we take pride in curating celebrations that
            leave a lasting impression.
          </p>
        </div>

        {/* <div className={styles.aboutUsLandingHeadingTwo}>
          <span className={styles.line}></span>
          <h3>We Curate Special Moments Into Memories</h3>
          <span className={styles.line}></span>
        </div> */}
      </motion.div>
      <motion.div
        ref={founderRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={isFounderInView ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.founderContainer}>
        <div className={styles.founderSubContainer}>
          {/* <img
            className={styles.blob}
            src="/dividers/corporate-divider.svg"
            alt="divider"
          /> */}
          <div className={styles.founderImgDiv}>
            <img src="/Pictures/founder.png" alt="exotic-goa-founder" />
          </div>
          <div className={styles.founderDescriptionContainer}>
            <h3>About Our Founder</h3>
            <header>Mr. Seby Noronha</header>
            <p>
              I am thrilled to introduce myself as the founder and CEO of Exotic
              Goa Events, which is situated in the picturesque state of Goa. Our
              expertise spans across event production, wedding planning and
              corporate events. <br />
              <br /> With over 13 years of experience, I take immense honour in
              leading a team of talented, dedicated, detail-oriented and
              ethusisatic professionals. Each day, my energies revolves in
              realizing Exotic Goa's mission: to unite people through
              unforgettable events. <br />
              <br /> Our foundation is built upon a culture that focuses on
              customer needs, feedback through the customer journey and being
              empathetic.
            </p>
          </div>
        </div>
      </motion.div>

      <div className={styles.weddingsSection}>
        <HeadingTItle
          key={"wedding"}
          title={"Weddings"}
          subtitle={"Our Best Memories"}
        />
        <motion.div
          ref={weddingsRef}
          initial={{ opacity: 0, translateY: 50 }}
          animate={isWeddingsInView ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.weddingDescriptionHome}>
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
        </motion.div>
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
        <motion.div
          ref={corporateRef}
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCorporateInView ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.corporateDescContainer}>
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
        </motion.div>
        <CorporateCarousel />
      </div>

      <div className={styles.portfolioContainer}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Portfolio"} subtitle={"Our Best Memories"} />
        {/* <PortfolioImg /> */}

        <PortfolioGallery />
      </div>

      <div className={styles.ourFeaturedContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Milestones"} subtitle={"What Makes Us Shine"} />

        {/* <div className={styles.reelsContainer}>
         <img
            src="/dividers/border.svg"
            alt="border"
            className={styles.reelBorderOne}
          />
          <img
            src="/dividers/border.svg"
            alt="border"
            className={styles.reelBorderTwo}
          /> 
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
        </div> */}

        <MilestonesCarousel />
      </div>

      <motion.div
        ref={milestonesRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={isMilestonesInView ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.instagramSection}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />

        <div className={`${styles.titleContainer} ${styles.instaTitle}`}>
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
        {/* <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        /> */}
      </motion.div>
    </>
  );
}

export default HomePage;
