import React, { useState,useRef,useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

 
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
    
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`${bgColor == true ? styles.navAlt : styles.nav}`}>
      <div className={styles.hamburgerMenuContainer}>
        {!menuOpen ? (
          <RxHamburgerMenu className={styles.menuIcon} onClick={toggleMenu} />
        ) : (
          <IoMdClose className={styles.menuIcon} onClick={toggleMenu} />
        )}
      </div>
      {isMobile && (
        <img
          className={`${styles.logo}`}
          src={pinkLogo}
          alt="exotic-goa-luxury-furniture-logo"
        />
      )}
      <div
      ref={menuRef}
        className={`${styles.navlinksContainer} ${
          menuOpen ? styles.showMenu : ""
        }`}>
        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/"}
          onClick={closeMenu}>
          Home
        </Link>
        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/weddings"}
          onClick={closeMenu}>
          Weddings
        </Link>
        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/corporate"}
          onClick={closeMenu}>
          Corporate
        </Link>

        <Link to={"/"}>
          {bgColor ? (
            <img
              className={styles.logo}
              src={pinkLogo}
              alt="exotic-goa-luxury-furniture-logo"
            />
          ) : (
            <img
              className={styles.logo}
              src={logo}
              alt="exotic-goa-luxury-furniture-logo"
            />
          )}
        </Link>

        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/our-services"}
          onClick={closeMenu}>
          Our Services
        </Link>
        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/blogs"}
          onClick={closeMenu}>
          Blogs
        </Link>
        <Link
          className={`${bgColor ? styles.linkAlt : styles.link}`}
          to={"/contact-us"}
          onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}

export default NavBar;
