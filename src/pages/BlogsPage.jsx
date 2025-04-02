import React from "react";
import styles from "../styles/Blogs/Blog.module.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import { BlogsProvider, useBlogs } from "../context/BlogsContext";
import landingVideo from '/public/videos/contactus.mp4'
function BlogsPage() {
  const blogs = useBlogs();

  const navigate = useNavigate();
  const handleReadMoreClick = (key) => {
    const index = blogIndex[key]
    navigate(blogs[`${index}`].route);
  };
  const blogIndex = ["BlogOne", "BlogTwo", "BlogThree"];
  return (
    <>
        <div className={styles.landingVideoContainer}>
        <NavBar />
        <video src={landingVideo} muted autoplay="true" loop></video>
      </div>

      <div className={styles.blogsContainer}>
        <header>Latest Blogs</header>

        <div className={styles.blogsSubContainer}>
          {Object.entries(blogs).map(([key, blog], index) => (
            <>
              <div key={`${index} + blog`} className={styles.blogsCard}>
                <div className={styles.blogsImgContainer}>
                  <img src={blog.thumbnail} alt="blogs-thumbnail" />
                  {/* <div className={styles.blogsDateContainer}>
                    <header>{blog.date}</header>
                    <span>{blog.month}</span>
                  </div> */}
                </div>

                <h5> {blog.heading}</h5>
                <button
                  onClick={() => {
                    handleReadMoreClick(index);
                  }}>
                  Read more
                </button>
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
