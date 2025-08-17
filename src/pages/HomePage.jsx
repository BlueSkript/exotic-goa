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

function HomePage() {
  const instagramPosts = [
    {
      link: "https://www.instagram.com/p/C94s9_nJpml/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124913/Exotic%20data/instagram/ghqy41diyudezunhekdn_zyz2va.webp",
    },
    {
      link: "https://www.instagram.com/p/DB3FS8aJcEC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124896/Exotic%20data/instagram/arbyajsn99qujkfdbp62_odrftn.webp",
    },
    {
      link: "https://www.instagram.com/p/DCET6CSPSmU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124943/Exotic%20data/instagram/ztjlgrabrrvq7onmz0n0_ll5kvn.webp",
    },
    {
      link: "https://www.instagram.com/p/DDtPXcgP2S3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124897/Exotic%20data/instagram/gcm3qci8vmcki5fakxme_vpfpj3.webp",
    },
    {
      link: "https://www.instagram.com/p/DBtNIWnofdj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124938/Exotic%20data/instagram/p2ysxmkbydorqoc9v5ye_fszcii.webp",
    },
    {
      link: "https://www.instagram.com/p/DBtNIWnofdj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "https://res.cloudinary.com/duh71fcas/image/upload/v1754124941/Exotic%20data/instagram/wqsswfja9u3czrqpkvj8_s5iui3.webp",
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

      <div className={styles.aboutUsLanding}>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className={styles.aboutusLandingContainer}>
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

        <div
          data-aos="fade-left"
          data-aos-once="true"
          className={styles.aboutusLandingContainer}>
          <h3>When did our journey begin?....</h3>
          <p>
            With 18+ years of experience in the events industry, our founder,
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
      </div>
      <div className={styles.founderContainer}>
        <div className={styles.founderSubContainer}>
          {/* <img
            className={styles.blob}
            src="/dividers/corporate-divider.svg"
            alt="divider"
          /> */}
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className={styles.founderImgDiv}>
            <img src="https://res.cloudinary.com/duh71fcas/image/upload/v1754067505/Exotic%20data/Pictures/founder.webp" alt="exotic-goa-founder" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className={styles.founderDescriptionContainer}>
            <h3>About Our Founder</h3>
            <header>Mr. Seby Noronha</header>
            <p>
              I am thrilled to introduce myself as the founder and CEO of Exotic
              Goa Events, which is situated in the picturesque state of Goa. Our
              expertise spans across event production, wedding planning and
              corporate events. <br />
              <br /> With over 18+ years of experience, I take immense honour in
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
      </div>

      <div className={styles.weddingsSection}>
        <HeadingTItle
          key={"wedding"}
          title={"Weddings"}
          subtitle={"Our Best Memories"}
        />
        <div
          data-aos="fade-up"
          data-aos-once="true"
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
          data-aos="fade-up"
          data-aos-once="true"
          key={"corporate"}
          title={"Corporate"}
          subtitle={"Our Best Memories"}
        />
        <div
          data-aos="fade-up"
          data-aos-once="true"
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
        </div>
        <CorporateCarousel />
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.portfolioContainer}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Portfolio"} subtitle={"Our Best Memories"} />

        <PortfolioGallery />
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.ourFeaturedContainer}>
        <img
          src="/dividers/corporate-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />
        <HeadingTItle title={"Milestones"} subtitle={"What Makes Us Shine"} />

        <MilestonesCarousel />
      </div>

      <div className={styles.instagramSection}>
        <img
          src="/dividers/portfolio-divider.svg"
          alt="page-divider"
          className={styles.blob}
        />

        <div className={`${styles.titleContainer} ${styles.instaTitle}`}>
          <h2>Instagram</h2>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className={styles.subtitleContainer}>
            <div className={styles.subtitleBar}></div>
            <span>Our Latest</span>
            <div className={styles.subtitleBar}></div>
          </div>
        </div>
        <div data-aos="fade-up"
            data-aos-once="true" className={styles.instagramImgConainer}>
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
      </div>
    </>
  );
}

export default HomePage;
