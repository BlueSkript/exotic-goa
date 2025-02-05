import React from "react";
import styles from "../styles/Blogs/BlogsDisplay.module.css";
import NavBar from "./NavBar";
import Slider from "react-slick";
import { BlogsProvider, useBlogs } from "../context/BlogsContext";
import { useImages } from "../context/CarouselContext";

function BlogsDisplay({ blogsKey }) {
  // const blogs = useBlogs();
  // const blog = blogs[]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <BlogsProvider>
      <div className={styles.navDiv}>
        <NavBar />
      </div>

      <h1>{blogsKey}</h1>
      <Slider {...settings} className={styles.slider}>
        {blogs["BlogOne"].map((imgs, index) => {
          return (
            <div
              data-aos="fade-left"
              key={index}
              className={styles.imgsContainer}>
              <img src={imgs} />
            </div>
          );
        })}
      </Slider>
    </BlogsProvider>
  );
}

export default BlogsDisplay;
