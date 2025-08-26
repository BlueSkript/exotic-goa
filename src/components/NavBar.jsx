import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "../styles/Nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "/logos/exotic-goa-nav-logo.png";
import pinkLogo from "/logos/exotic-goa-logo.png";

function NavBar({ bgColor }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // lock scroll + click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.classList.add("body-lock");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("body-lock");
    }

    return () => {
      document.body.classList.remove("body-lock");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`${bgColor ? styles.navAlt : styles.nav}`}
    >
      {/* Hamburger Icon */}
      <div className={styles.hamburgerMenuContainer}>
        {!menuOpen ? (
          <RxHamburgerMenu className={styles.menuIcon} onClick={toggleMenu} />
        ) : (
          <IoMdClose className={styles.menuIcon} onClick={toggleMenu} />
        )}
      </div>

      {/* Logo */}
      <img
        className={styles.logo}
        src={bgColor ? logo : pinkLogo}
        alt="exotic-goa-logo"
      />

      {/* Slide-in Menu */}
      <motion.div
        ref={menuRef}
        className={`${styles.navlinksContainer} ${menuOpen ? styles.showMenu : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/"} onClick={closeMenu}>
          Home
        </Link>
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/weddings"} onClick={closeMenu}>
          Weddings
        </Link>
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/corporate"} onClick={closeMenu}>
          Corporate
        </Link>
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/our-services"} onClick={closeMenu}>
          Our Services
        </Link>
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/blogs"} onClick={closeMenu}>
          Blogs
        </Link>
        <Link className={`${bgColor ? styles.linkAlt : styles.link}`} to={"/contact-us"} onClick={closeMenu}>
          Contact Us
        </Link>
      </motion.div>
    </motion.nav>
  );
}

export default NavBar;
