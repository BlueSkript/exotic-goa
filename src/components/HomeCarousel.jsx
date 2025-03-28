import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home/HomeCarousel.module.css";
import NavBar from "./NavBar";
import { useImages } from "../context/CarouselContext";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";
function HomeCarousel() {
  const images = useImages();
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
    <div className={styles.carouselContainer}>
      <NavBar></NavBar>
      <div className={styles.gradientFilter}></div>
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
              <h1>Exotic Goa</h1>
              <p>
                Wedding Management | Decor <br />
                Mice Global | Luxury Furniture <br />
                India, Goa
              </p>
            </div>
            <header>We create experiences</header>
            <p>India, Goa</p>
            <a className={styles.homeContactUsBtn} href="">
              Contact Us
            </a>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, translateX: -70 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={styles.contentContainerLeft}>
            <div className={styles.content}>
              <ImQuotesLeft className={styles.quoteIcon} />
              <p>
                Exotic Goa made our dreams come true! We did not imagine our
                wedding to be so close to a fairytale that we wanted it to be.
                They took care of each and every detail and suggested us where
                needed. We definitely made the right choice in choosing Exotic
                Goa. Thank you Shruti and team for giving us the best day ever!”
              </p>
              <ImQuotesRight className={styles.quoteIcon} />
            </div>
            <header>Tripti & Divyanshu</header>
          </motion.div> */}

          <motion.h5
            initial={{ opacity: 0, translateX: 70 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
           Where Every Celebration <br /> Becomes a Timeless Experience!
          </motion.h5>
        </div>
      </motion.div>
      <Slider {...settings} className={styles.slider}>
        {images["homepage"].map((img, index) => {
          return (
            <div key={index} className={styles.imgsSlide}>
              <img src={img} alt={img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
