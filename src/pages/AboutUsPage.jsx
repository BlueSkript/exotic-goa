import React from "react";
import AboutCarousel from "../components/About/AboutCarousel";
import styles from "../styles/About/About.module.css";
import HeadingTitle from "../components/Home/HeadingTItle";
import { FaInstagram } from "react-icons/fa";
function AboutUsPage() {
  const instagramPosts = [
    {
      link: "https://www.instagram.com/p/DCwizoXO-mW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img7.heic",
    },
    {
      link: "https://www.instagram.com/p/DCETWkwvVUq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img8.heic",
    },
    {
      link: "https://www.instagram.com/p/DB3E-SCJiWM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img9.heic",
    },
    {
      link: "https://www.instagram.com/p/C9M7YklNrhf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img10.heic",
    },
    {
      link: "https://www.instagram.com/p/C9M7YklNrhf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img11.heic",
    },
    {
      link: "https://www.instagram.com/p/C9MadjkuC5b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/instagram/instagram-exotic-img12.webp",
    },
  ];
  return (
    <>
      <AboutCarousel />

      <div className={styles.aboutUsLanding}>
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
           With 13 years of
            experience in the events industry, our founder, Seby Noronha,
            embarked on his own venture, Exotic Goa, in February 2018. Our
            mission is to create meaningful experiences that bring people
            together through unforgettable events. With insight, empathy, and a
            service-first mindset at the core of our business, we ensure every
            event is crafted to perfection. From elegant weddings to grand
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
          <div className={styles.founderImgDiv}>
            <img src="https://res.cloudinary.com/duh71fcas/image/upload/v1754067505/Exotic%20data/Pictures/founder.webp" alt="exotic-goa-founder" />
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
      </div>

      <div className={styles.instagramSection}>
        {/* <img
          src="/dividers/portfolio-divider.svg"
          className={styles.blobTwo}
          alt=""
        /> */}
        <div className={styles.instagramSubSection}>
          <div className={styles.headingContainer}>
            <header>Instagram</header>
            <div className={styles.subHeading}>
              <span className={styles.line}></span>
              <p>Our Best Memories</p>
              <span className={styles.line}></span>
            </div>
          </div>

          <div className={styles.instagramPicturesContainer}>
            {instagramPosts.map((post, index) => {
              return (
                <div
                  className={styles.instagramImgDiv}
                  key={`${post} ${index}`}>
                  <a href={post.link} target="_blank">
                    <FaInstagram className={styles.instagramImgDivIcon} />
                  </a>
                  <img src={post.imgSrc} alt="exotic-goa-instagram-picture" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerDivider}></div>
    </>
  );
}

export default AboutUsPage;
