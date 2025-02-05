import React from "react";
import Slider from "react-slick";
import styles from "../../styles/Home/CorporateCarousel.module.css";
import { useImages } from "../../context/CarouselContext";
function CorporateCarousel() {
  const images = useImages();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <Slider {...settings} className={styles.slider}>
      {images["homepageCorporate"].map((img, index) => {
        return (
          <div
            data-aos="fade-right"
            key={index}
            className={styles.imgsContainer}>
            <img src={img} alt={img} />
          </div>
        );
      })}
    </Slider>
  );
}

export default CorporateCarousel;
