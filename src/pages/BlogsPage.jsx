import React from "react";
import styles from "../styles/Blogs/Blog.module.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import { BlogsProvider, useBlogs } from "../context/BlogsContext";
function BlogsPage() {
  // const blogs = useBlogs();
  // const navigate = useNavigate();
  const handleReadMoreClick = (key) => {
    // navigate(blogs[`${key}`].route);
    console.log('key press');
  };
  return (
    <>
      <div className={styles.videoContainer}>
        <NavBar />
        <video src="/video.mp4" autoPlay muted loop></video>
      </div>

      <div className={styles.blogsContainer}>
        <header>Latest Blogs</header>

        <div className={styles.blogsSubContainer}>
          <div className={styles.blogsCard}>
            <div className={styles.blogsImgContainer}>
              <img src="/temp/20.webp" alt="blogs" />
              <div className={styles.blogsDateContainer}>
                <header>01</header>
                <span>Dec</span>
              </div>
            </div>

            <a>Destination Weddings Goa - The best gift to your spouse</a>
            <button
              onClick={() => {
                handleReadMoreClick("BlogOne");
              }}>
              Read more
            </button>
          </div>
          <div className={styles.blogsCard}>
            <div className={styles.blogsImgContainer}>
              <img src="/temp/23.webp" alt="blogs" />
              <div className={styles.blogsDateContainer}>
                <header>09</header>
                <span>Nov</span>
              </div>
            </div>

            <a>From Concept to Celebration – We’ve Got You Covered!</a>
            <button>Read more</button>
          </div>
          <div className={styles.blogsCard}>
            <div className={styles.blogsImgContainer}>
              <img src="/temp/25.jpg" alt="blogs" />
              <div className={styles.blogsDateContainer}>
                <header>14</header>
                <span>Jan</span>
              </div>
            </div>

            <a>Say 'I Do' to Stress-Free Wedding Planning!</a>
            <button>Read more</button>
          </div>
        </div>
      </div>

      <div className={styles.footerDiv}>
        <img
          src="/dividers/footer-divider.svg"
          alt="divider"
          className={styles.footerDivider}
        />
      </div>
    </>
  );
}

export default BlogsPage;
