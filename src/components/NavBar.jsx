import React, { useState } from "react";
import { Link } from "react-router";
import styles from "../styles/Nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";
import logo from "/public/logos/exotic-goa-nav-logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.nav}>
      <div className={styles.hamburgerMenuContainer} onClick={toggleMenu}>
        {!menuOpen ? <RxHamburgerMenu className={styles.menuIcon} /> : <IoMdClose className={styles.menuIcon} />}
      </div>
      <div
        className={`${styles.navlinksContainer} ${
          menuOpen ? styles.showMenu : ''
        }`}>
        <Link className={styles.link} to={"/"} onClick={closeMenu}>
          Home
        </Link>
        <Link className={styles.link} to={"/weddings"} onClick={closeMenu}>
          Weddings
        </Link>
        <Link className={styles.link} to={"/corporate"} onClick={closeMenu}>
          Corporate
        </Link>

        <img
          className={styles.logo}
          src={logo}
          alt="exotic-goa-luxury-furniture-logo"
        />

        <Link className={styles.link} to={"/our-services"} onClick={closeMenu}>
          Our Services
        </Link>
        <Link className={styles.link} to={"/blogs"} onClick={closeMenu}>
          Blogs
        </Link>
        <Link className={styles.link} to={"/contact-us"} onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}

export default NavBar;
