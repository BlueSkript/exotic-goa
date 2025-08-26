import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs/Blog.module.css";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router";
import { BlogsProvider, useBlogs } from "../context/BlogsContext";
import mobileCarouselImages from "../../JSONs/Phone View.json";

import { motion } from "framer-motion";
import Slider from "react-slick";

function BlogsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
const [duplicatedItems, setDuplicatedItems] = useState([]);

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
  const images = [
    "https://res.cloudinary.com/duh71fcas/image/upload/v1754067208/Exotic%20Data/Home%20Page/Cover%20Images/3.webp",
  ];
  const blogs = useBlogs();

  return (
    <>
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
                <h1>Our Amazing Executions</h1>
                <p>
                  Featured at Wedding Sutra | Executions at Goa’s top 5 Stars.
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
              Turning moments into memories,
              <br /> and dreams into I do's
            </motion.h5>
          </div>
        </motion.div>
        <Slider {...settings} className={styles.slider}>
          {(isMobile ? mobileCarouselImages: images).map((img, index) => {
            return (
              <div key={index} className={styles.imgsSlide}>
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={styles.blogsContainer}>
        <header>Latest Blogs</header>

        <div className={styles.blogsSubContainer}>
          {Object.entries(blogs).map(([key, blog], index) => (
            <>
              <div
                key={`${index} + blog + ${key}`}
                className={styles.blogsCard}>
                <div className={styles.blogsImgContainer}>
                  <img src={blog.thumbnail} alt="blogs-thumbnail" />
                  {/* <div className={styles.blogsDateContainer}>
                    <header>{blog.date}</header>
                    <span>{blog.month}</span>
                  </div> */}
                </div>

                <h5> {blog.heading}</h5>
                <a href={blog.route} target="_blank">
                  Read more
                </a>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <div className={styles.footerDiv}>
        <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        />
      </div> */}
    </>
  );
}

export default BlogsPage;
