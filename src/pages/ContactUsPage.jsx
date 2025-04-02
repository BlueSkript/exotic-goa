import React from "react";
import styles from "../styles/ContactUs/ContactUs.module.css";
import ContactUsCarousel from "../components/ContactUs/ContactUsCarousel";
import NavBar from "../components/NavBar";
import landingVideo from "/public/videos/contactus.mp4";
import { motion } from "framer-motion";
function ContactUsPage() {
  return (
    <>
      {/* <ContactUsCarousel /> */}
      <div className={styles.landingVideoContainer}>
        <NavBar />
        <video src={landingVideo} muted autoplay="true" loop></video>
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
                <h1>Contact Us</h1>
                <p>
                  Wedding Management | Decor <br />
                  Mice Global | Luxury Furniture <br />
                  India, Goa
                </p>
              </div>
              <header>We create experiences</header>
              <p>India, Goa</p>
              <a className={styles.homeContactUsBtn} href="">
                Contact Us
              </a>
            </motion.div>

            <motion.h5
              initial={{ opacity: 0, translateX: 70 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              Where Every Celebration <br /> Becomes a Timeless Experience!
            </motion.h5>
          </div>
        </motion.div>
      </div>
      <div className={styles.contactUsContainer}>
        <div className={styles.formContainer}>
          <h3>Contact Info</h3>
          <div className={styles.formSubContainer}>
            <div className={styles.addressItem}>
              <header>Address :</header>
              <span>
                F4, 1st Floor, Osia Mall Building, Near KTC Bus Stand, Margao,
                Goa - 403601
              </span>
            </div>
            <div className={styles.addressItem}>
              <header>Phone No :</header>
              <span>+91 98229 71391</span>
            </div>
            <div className={styles.addressItem}>
              <header>Email :</header>
              <span>seby@exoticgoa.in</span>
            </div>
            <div className={styles.addressItem}>
              <header>Office timings :</header>
              <span>Mon - Sat, 9.00am to 7.00pm</span>
            </div>
          </div>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.formHeadingContainer}>
            <header>Your Dream Event Starts Here – Let's Connect!</header>
            <span>Plan Your Perfect Event reach Out to Us Today!</span>
          </div>

          <div className={styles.inputContiner}>
            <label for="formname">Name</label>
            <input required id="formname" type="text" />
          </div>
          <div className={styles.inputContiner}>
            <label for="formemail">Email</label>
            <input required id="formemail" type="email" />
          </div>
          <div className={styles.inputContiner}>
            <label for="formmessage">Message</label>
            <textarea required id="formmessage" name="message"></textarea>
          </div>
          <div className={styles.inputContiner}>
            <button>SEND</button>
          </div>
        </form>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.6647345578444!2d73.95367157574985!3d15.286068559926022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e4137b48f9%3A0x6baa3a47e854cbbd!2sExotic%20Goa!5e0!3m2!1sen!2sin!4v1738581263864!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className={styles.divider}></div>
    </>
  );
}

export default ContactUsPage;
