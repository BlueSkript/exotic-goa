import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home/HomeCarousel.module.css";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { Link } from "react-router";
import carouselImages from '../../JSONs/Cover Images.json'
function HomeCarousel() {

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
            <p className={styles.address}>India, Goa</p>
            <Link className={styles.homeContactUsBtnContainer} to={'/contact-us'}><a className={styles.homeContactUsBtn} href="">
              Contact Us
            </a></Link>
            
          </motion.div>
          

          <motion.h5
            initial={{ opacity: 0, translateX: 70 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
           Where every celebration <br /> becomes a timeless experience!
          </motion.h5>
        </div>
      </motion.div>
      <Slider {...settings} className={styles.slider}>
        {carouselImages.map((img, index) => {
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
