import React from "react";
import styles from "../styles/Blogs/BlogsDisplay.module.css";
import NavBar from "./NavBar";
import Slider from "react-slick";
import { BlogsProvider, useBlogs } from "../context/BlogsContext";
import { useImages } from "../context/CarouselContext";

function BlogsDisplay({ blogsKey }) {
  const blogs = useBlogs();
  const blog = blogs[`${blogsKey}`];
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
    <div className={styles.blogMainContainer}>
      <div className={styles.navDiv}>
        <NavBar />
      </div>

      <Slider {...settings} className={styles.slider}>
        {blog.images.map((img, index) => (
          <img key={index} src={img} alt={`Blog ${index}`} width="100" />
        ))}
      </Slider>
      <div className={styles.contentContainer}>
        <header>{blog.heading}</header>
        <p>
          {blog.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        />
    </div>
  );
}

export default BlogsDisplay;
