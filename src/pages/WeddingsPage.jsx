import React from "react";
import HeadingTItle from "../components/Home/HeadingTItle";
import styles from "../styles/weddings/WeddingsPage.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import howWeDoItOne from "/Pictures/howwedoitone.gif";
import howWeDoItTwo from "/Pictures/howwedoittwo.gif";
import howWeDoItThree from "/Pictures/howwedoitthree.gif";
import Slider from "react-slick";
import NavBar from "../components/NavBar";

import venueImgs from "../../JSONs/Venues.json";
import landingVideoPoster from "/videoPosters/weddingsPageLoader.png";


import { Link } from "react-router";

const testimonials = [
  {
    image: "/Pictures/testimonialimg.jpeg",
    text: `I had an amazing experience planning my wedding with Exotic.
      They’re efficient, in the know, creative, caring, and passionate
      about what they do. I didn’t have to second guess their execution,
      which is what every bride stresses about. They did the wedding for
      us with the same affection and love that a family member would do.
      There were no cutting corners. They were always on our team, and
      meticulous in the process. I couldn’t recommend them more. Preeti
      from the team was especially amazing!`,
    author: "- Maithili Parikh",
  },
  {
    image: "/Pictures/testimonialimg.jpeg",
    text: `I had an amazing experience planning my wedding with Exotic.
      They’re efficient, in the know, creative, caring, and passionate
      about what they do. I didn’t have to second guess their execution,
      which is what every bride stresses about. They did the wedding for
      us with the same affection and love that a family member would do.
      There were no cutting corners. They were always on our team, and
      meticulous in the process. I couldn’t recommend them more. Preeti
      from the team was especially amazing!`,
    author: "- Maithili Parikh",
  },
  {
    image: "/Pictures/testimonialimg.jpeg",
    text: `I had an amazing experience planning my wedding with Exotic.
      They’re efficient, in the know, creative, caring, and passionate
      about what they do. I didn’t have to second guess their execution,
      which is what every bride stresses about. They did the wedding for
      us with the same affection and love that a family member would do.
      There were no cutting corners. They were always on our team, and
      meticulous in the process. I couldn’t recommend them more. Preeti
      from the team was especially amazing!`,
    author: "- Maithili Parikh",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  buttons: false,
};

const speed = 30;
function WeddingsPage() {
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    setDuplicatedItems([
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
    ]);
  }, [venueImgs]);

  return (
    <>
      {/* <WeddingsCarousel /> */}
      <div className={styles.landingVideoContainer}>
        <NavBar />
        <video
          poster={landingVideoPoster}
          src={
            "https://res.cloudinary.com/duh71fcas/video/upload/v1754072376/Exotic%20data/Videos/weddings.mp4"
          }
          muted
          autoPlay
          loop></video>
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
                <h1>Exotic Hospitality</h1>
                <p>
                  Venue management | Hospitality & Logistics | Artist management
                  | F &B | Technical Solution | Photography
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
              You plan for your life together, <br />
              we will make the beginning <br /> special & memorable
            </motion.h5>
          </div>
        </motion.div>
      </div>

      <div className={styles.weddingsInGoaContainer}>
        <HeadingTItle
          title={"Weddings in Goa"}
          subtitle={"Your Dream Destination"}
        />
        <p data-aos="fade-up" data-aos-once="true">
          What could be more enchanting than the fresh sea breeze blowing across
          your face? A vibrant sunset painting that can be your perfect backdrop
          or the soft sand beneath your feet? Not to forget even the gentle
          sound of the waves crashing nearby? Your dream wedding awaits you in
          Goa
        </p>

        <div className={styles.weddingsReelsContainer}>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}>
            <header className={styles.reelHeadijng}>Haldi</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754125278/Exotic%20data/Weddings%20Page/Haldi_aus1vu.mp4"}></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={200}>
            <header className={styles.reelHeadijng}>Mehendi</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754124658/Exotic%20data/Weddings%20Page/Mehendi_j4weqc.mp4"}></video>
          </div>

          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}>
            <header className={styles.reelHeadijng}>Sangeet</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754124650/Exotic%20data/Weddings%20Page/Sangeet_jshjvs.mp4"}></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={400}>
            <header className={styles.reelHeadijng}>Wedding</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754124659/Exotic%20data/Weddings%20Page/Wedding_ej5gec.mp4"}></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={500}>
            <header className={styles.reelHeadijng}>Hospitality</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754124640/Exotic%20data/Weddings%20Page/Hospitality_2_lts8bj.mp4"}></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={600}>
            <header className={styles.reelHeadijng}>Hospitality</header>
            <video autoPlay loop muted controls src={"https://res.cloudinary.com/duh71fcas/video/upload/v1754124637/Exotic%20data/Weddings%20Page/Hospitality_wfdxjj.mov"}></video>
          </div>
        </div>
      </div>

      <div className={styles.howWeDoItContainer}>
        <h5 data-aos="fade-up" data-aos-once="true">
          How we do it
        </h5>

        <div className={styles.howWeDoItSubContainer}>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}>
            <img src={howWeDoItOne} alt="" />
            <header>Plan</header>
            <p>
              Once we’ve envisioned the story you wish to tell, we begin by
              meticulously planning everything, right from the venue to hampers
              and budget planning.
            </p>
          </div>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={200}>
            <img src={howWeDoItTwo} alt="" />
            <header>connect</header>
            <p>
              We make sure you’re equipped with the best artists in the
              business- skilled photographers, makeup artists, DJs and more,
              based on what’s right for you and your wedding.
            </p>
          </div>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}>
            <img src={howWeDoItThree} alt="" />
            <header>Design</header>
            <p>
              Whether you’re looking for an extravagant or an intimate wedding,
              we beautifully craft everything from set design to sound, lights
              and flowers.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          className={styles.getInTouchContainer}>
          <a
            target="_blank"
            href="https://wa.me/919822971391?text=Hi%20Exotic%20Goa%2C%20I%20am%20interested%20in%20your%20Wedding%20Event%20Planners%20services.">
            <h6>Get in touch</h6>
            <BsWhatsapp className={styles.whatsappicon} />
          </a>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.venuesWeHaveWorkedWith}>
        <h4>Venues We Do Weddings At</h4>
        <div className={styles.carousel}>
          <div
            className={styles.carouseltrack}
            style={{ animationDuration: `${speed}s` }}>
            {duplicatedItems.map((item, index) => (
              <div className={styles.carouselitem} key={index}>
                <img src={item} alt={`Item ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.testimonialsContainer}>
        <h3>Testimonials</h3>

        <Slider {...settings} className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialsSubContainer}>
              <div className={styles.testimonialSubSub}>
                <img src={testimonial.image} alt="testimonial" />
                <div className={styles.testimonialContent}>
                  <span>{testimonial.text}</span>
                  <header>{testimonial.author}</header>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default WeddingsPage;
