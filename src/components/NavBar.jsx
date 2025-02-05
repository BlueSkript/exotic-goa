import React from "react";
import { Link } from "react-router";
import styles from "../styles/Nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <nav>
      <div className={styles.logoDiv}>
        <img
          src="logos/exotic-goa-nav-logo.png"
          alt="exotic-goa-luxury-furniture-logo"
        />
      </div>
      <div className={styles.hamburgerMenuContainer}>
        <RxHamburgerMenu className={styles.menuIcon} />
      </div>

      <div className={styles.navlinksContainer}>
        <Link className={styles.link} to={"/"}>
          Home
        </Link>
        <Link className={styles.link} to={"/about-us"}>
          About Us
        </Link>
        <Link className={styles.link} to={"/weddings"}>
          Weddings
        </Link>
        <Link className={styles.link} to={"/corporate"}>
          Corporate
        </Link>
        <Link className={styles.link} to={"/wedding-hospitality"}>
          Wedding Hospitality
        </Link>
        <Link className={styles.link} to={"/our-services"}>
          Our Services
        </Link>
        <Link className={styles.link} to={"/blogs"}>
          Blogs
        </Link>
        <Link className={styles.link} to={"/contact-us"}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
