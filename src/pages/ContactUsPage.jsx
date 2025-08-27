import React, { useEffect, useState } from "react";
import styles from "../styles/ContactUs/ContactUs.module.css";
import ContactUsCarousel from "../components/ContactUs/ContactUsCarousel";
import NavBar from "../components/NavBar";
import poster from "/videoPosters/contactUsLandingPoster.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import mobileCarouselImages from "../../JSONs/Phone View.json";
function ContactUsPage() {
  function sendToWhatsApp() {
    const name = document.getElementById("formname").value.trim();
    const email = document.getElementById("formemail").value.trim();
    const phone = document.getElementById("formnumber").value.trim();
    const message = document.getElementById("formmessage").value.trim();

    const finalMessage = `Hello, I would like to plan an event.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const whatsappNumber = "919822971391";

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${finalMessage}`;
    window.open(whatsappURL, "_blank");
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    buttons: false,
  };
  return (
    <>
      {/* <ContactUsCarousel /> */}
      <div className={styles.landingVideoContainer}>
        <NavBar />
        
        {!isMobile && (
          <video
            poster={poster}
            src={
              "https://res.cloudinary.com/duh71fcas/video/upload/v1754122921/Exotic%20data/Contact%20Us/GATHERING_REEL_yuisib.mp4"
            }
            muted
            autoPlay
            loop></video>
        )}
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
                  Wedding Management | Decor | Decor | MICE Global | Luxury
                  Furniture Goa, India.
                </p>
              </div>
              <header>We create experiences</header>
              <p className={styles.address}>India, Goa</p>
            </motion.div>

            <motion.h5
              initial={{ opacity: 0, translateX: 70 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}>
              We’re just a message away <br />
              let’s make something unforgettable together.
            </motion.h5>
          </div>
        </motion.div>
        {isMobile && (
          <Slider {...settings} className={styles.slider}>
            {mobileCarouselImages.map((img, index) => {
              return (
                <div key={index} className={styles.imgsSlide}>
                  <img src={img} alt={img} />
                </div>
              );
            })}
          </Slider>
        )}
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

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            sendToWhatsApp();
          }}>
          <div className={styles.formHeadingContainer}>
            <header>Your Dream Event Starts Here – Let's Connect!</header>
            <span>Plan Your Perfect Event reach Out to Us Today!</span>
          </div>

          <div className={styles.inputContiner}>
            <label htmlFor="formname">Name</label>
            <input required id="formname" type="text" />
          </div>
          <div className={styles.inputContiner}>
            <label htmlFor="formemail">Email</label>
            <input required id="formemail" type="email" />
          </div>
          <div className={styles.inputContiner}>
            <label htmlFor="formnumber">Phone</label>
            <input required id="formnumber" type="text" />
          </div>
          <div className={styles.inputContiner}>
            <label htmlFor="formmessage">Message</label>
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
