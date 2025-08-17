import React ,{useRef} from "react";
import Slider from "react-slick";
import styles from "../../styles/Home/WeddingHomeCarousel.module.css";

import weddingImages from '../../../JSONs/Wedding Section Images.json'
function WeddingHomeCarousel() {
 
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    buttons : false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    draggable: true,
    // centerMode : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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

  

  const handleImageClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <Slider ref={sliderRef} {...settings} className={styles.slider}>
      {weddingImages.map((imgs, index) => {
        return (
          <div data-aos='fade-up'  
          onClick={() => handleImageClick(index)}
          data-aos-once="true"  key={index} className={styles.imgsContainer}>
            <img src={imgs} alt={`Slide ${index}`} loading="lazy"/>
          </div>
        );
      })}
    </Slider>
  );
}

export default WeddingHomeCarousel;
