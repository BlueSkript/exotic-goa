import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logo from "/logos/exotic-goa-logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img className={styles.footerLogo} src={logo} alt="" />
        <span className={styles.logoDivDesc}>
          Welcome to Exotic Goa Events, a luxurious event company situated in
          the city of Margao.
        </span>
        <div className={styles.socialsIconsContainer}>
          <a href="https://www.facebook.com/share/1F1Kuoah3Y/">
            <span className={styles.iconContainer}>
              <FaFacebookF className={styles.icon} />
            </span>
          </a>
          <a href="https://www.youtube.com/@exoticgoa_events">
            <span className={styles.iconContainer}>
              <FaYoutube className={styles.icon} />
            </span>
          </a>
          <a href="https://www.instagram.com/exotic_goa?igsh=NnhwaGlrczhiNTdq">
            <span className={styles.iconContainer}>
              <RiInstagramFill className={styles.icon} />
            </span>
          </a>
          <a href="https://www.linkedin.com/company/exoticgoa/">
            <span className={styles.iconContainer}>
              <FaLinkedinIn className={styles.icon} />
            </span>
          </a>
        </div>
        <div className={styles.footserContainerOne}>
          <div className={styles.quickLinksContainer}>
            <h5>Quick Links</h5>
            <Link className={styles.quickLinks} to={"/"}>
              Home
            </Link>
            {/* <Link className={styles.quickLinks} to={"/about-us"}>
              About Us
            </Link> */}
            <Link className={styles.quickLinks} to={"/weddings"}>
              Weddings
            </Link>
            <Link className={styles.quickLinks} to={"/corporate"}>
              Corporate
            </Link>
            {/* <Link className={styles.quickLinks} to={"/wedding-hospitality"}>
              Wedding Hospitality
            </Link> */}
            <Link className={styles.quickLinks} to={"/our-services"}>
              Our Services
            </Link>
            <Link className={styles.quickLinks} to={"/blogs"}>
              Blogs
            </Link>
            <Link className={styles.quickLinks} to={"/contact-us"}>
              Contact Us
            </Link>
          </div>

          <div className={styles.exploreMoreContiner}>
            <h5>Explore</h5>
            {/* <Link className={styles.expoloreMoreLink}>FAQ</Link> */}
            <Link
              to={"/exotic-goa-gallery"}
              className={styles.expoloreMoreLink}>
              Gallery
            </Link>
            {/* <Link className={styles.expoloreMoreLink}>Wedding</Link> */}
            {/* <Link className={styles.expoloreMoreLink}>Mice Corporate</Link> */}
            <Link to={"/moodboard"} className={styles.expoloreMoreLink}>
              Moodboard
            </Link>
          </div>

          <div className={styles.instagramContainerFooter}>
            <h5>Instagram</h5>
            <div className={styles.instaImgsContainer}>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgOne}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgTwo}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgThree}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgFour}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgFive}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
              <div
                className={`${styles.instaImgSubContainer} ${styles.instaImgSix}`}>
                <a
                  href="https://www.instagram.com/exotic_goa/"
                  target="_blank"
                  className={styles.footerInstaContainer}>
                  <FaInstagram className={styles.instaIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerContainerTwo}>
          <div className={styles.copyrightsContainer}>
            <span>© 2025 Exotic Goa. All Rights Reserved.</span>
          </div>

          <div className={styles.policiesContainer}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
