import React from "react";
import HeadingTItle from "../components/Home/HeadingTItle";
import styles from "../styles/weddings/WeddingsPage.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import howWeDoItOne from "/Pictures/howwedoitone.gif";
import howWeDoItTwo from "/Pictures/howwedoittwo.gif";
import howWeDoItThree from "/Pictures/howwedoitthree.gif";
import Slider from "react-slick";
import NavBar from "../components/NavBar";
import mobileCarouselImages from '../../JSONs/Phone View.json'
import venueImgs from "../../JSONs/Venues.json";
import landingVideoPoster from "/videoPosters/weddingsPageLoader.png";

import { Link } from "react-router";

const testimonials = [
  {
    textOne: `We were beyond thrilled with our decision to choose Exotic Goa as our wedding planners. 
From our very first interaction with Preeti and Sidaarth, it was evident that we were in capable hands. 
Unlike other planners, they didn't just say "yes" to everything; instead, they provided genuine feedback 
and suggestions that truly enhanced our vision.`,
    textTwo: `Throughout the entire process, their communication was impeccable. 
Preeti was always available (despite the time difference), and her dedication to ensuring every detail was perfect 
was truly remarkable. On the big day, their team worked tirelessly to transform each venue into exactly what 
we had envisioned. Preeti's coordination was flawless, ensuring that everything ran smoothly and on schedule. 
Our guests were absolutely blown away by the result, and we owe it all to Exotic Goa for making our dream wedding 
a reality. We can't thank them enough for their professionalism, creativity, and commitment to excellence.`,
    author: "- Ria Odedra",
  },
  {
    textOne: `I recently had the pleasure of working with Exotic Goa for my wedding decor and I couldn't be happier with the results. 
Their attention to detail was impeccable, creating a magical atmosphere that exceeded my expectations. 
The team was not only professional but also incredibly creative, turning my vision into a reality. 
Every guest was in awe of the stunning decor, and it truly elevated the entire wedding experience.`,
    textTwo: `I highly recommend this vendor to anyone seeking top-notch wedding decor services in Goa. 
I would also like to give a special mention to Vishal and Simral who were extremely cooperative and supportive throughout the process. 
Vishal with his management and execution skills and Simral with her creativity made a fabulous team.`,
    author: "- Snehal Choudhary",
  },
  {
    textOne: `From the moment we began working with Kelista, we knew we were in expert hands. 
Her vision, professionalism, and passion for wedding decor went far beyond our expectations. 
Kelista and her team at Exotic Goa didn’t just deliver—they outperformed on every level.`,
    textTwo: `She took our ideas and elevated them into something magical. Every detail, from the floral arrangements to the lighting and personalized touches, was executed flawlessly. 
Guests are still raving about how beautiful and unique the decor was—and it’s all thanks to Kelista’s incredible eye for design and dedication to perfection.
If you’re looking for someone who truly cares about making your day special and stress-free, Kelista is the one. 
I cannot recommend Exotic Goa enough. She turned our dream wedding into a reality—and then some. 
Thank you, Kelista, for making our day unforgettable.`,
    author: "- Prerna Arora",
  },
  {
    textOne: `Planning a wedding in India while living abroad is not an easy task, but Exotic Goa is here to support you through this journey 
and make your wedding as special as you have ever dreamt of. 
I’m sure while looking for a wedding planner, you will look for a team that is working in harmony with all the right expertise under one umbrella… I advise you to look no further…`,
    textTwo: `Be it décor, hospitality, shadows, creatives, guest management, working and managing the venue team/vendors - every aspect was well thought and planned by Exotic for us. 
Exotic’s remarkable team was there every step of the way, in full capacity to make our day special, impeccable… almost perfect and memorable for us, our family and guests attending.
A very special mention and shoutout to Ms Lizzie and Ms Yogini, who collectively made the wedding so special, they worked with such precision and expertise, they made sure what I envisioned was brought to reality with such ease. 
They were always readily available from day one of planning till wedding day, to ensure timely planning and arrangements were made.`,
    author: "- Vandana Daryani",
  },
  {
    textOne: `We recently had the pleasure of working with Exotic Goa and Kelista, who organized our wedding event over two unforgettable days 
on 15th and 16th January 2025 at Planet Hollywood Beach Resort, Goa. 
From start to finish, their team was incredibly supportive, professional, and attentive to every detail.`,
    textTwo: `Exotic Goa and Kelista went above and beyond to ensure that every aspect of our celebration was executed beautifully. 
Their meticulous planning and flawless coordination made the entire event seamless and stress-free. 
The decor was absolutely stunning, the arrangements were impeccable, and they accommodated all our specific requests with ease.
Throughout the two-day celebration, their team was always available, proactive, and focused on ensuring that our guests were comfortable and that everything ran smoothly. 
We highly recommend Exotic Goa and Kelista to anyone planning a wedding or any special event. 
Special thanks to Seby, the owner, who was incredibly supportive and ensured everything went off without a hitch.`,
    author: "- Udit Lunker",
  },
  {
    textOne: `I got married in Nov 2024 in Goa and we stumbled upon Exotic Goa team through ads, hoardings - they are literally the most popular! 
To our surprise, Janette, Sid and his entire team stand up to their promise and name - everything from planning to execution was just PERFECT!`,
    textTwo: `Janette is very sweet and hardworking, dedicated her days and nights to my wedding, I felt so happy just to meet the person behind all the magic. 
They know what they are doing, being a high maintenance client they managed to reach above and beyond my expectations in terms of decor, vibes and best part - real life was 100% as shown in sample pictures - LOVED THEM TO BITS - 
I would get married again to my husband just to get their services haha. Jokes apart, brilliant team and the only choice one should make for GOA!`,
    author: "- Anmol Gupta",
  },
];



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

const speed = 30;
function WeddingsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    setDuplicatedItems([
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
      ...venueImgs,
    ]);
  }, [venueImgs]);

  return (
    <>
      {/* <WeddingsCarousel /> */}
      <div className={styles.landingVideoContainer}>
        <NavBar />
        {!isMobile && (<video
          poster={landingVideoPoster}
          src={
            "https://res.cloudinary.com/duh71fcas/video/upload/v1754072376/Exotic%20data/Videos/weddings.mp4"
          }
          muted
          autoPlay
          loop></video>)}
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
                <h1>Exotic Hospitality</h1>
                <p>
                  Venue management | Hospitality & Logistics | Artist management
                  | F &B | Technical Solution | Photography
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
              You plan for your life together, <br />
              we will make the beginning <br /> special & memorable
            </motion.h5>
          </div>
          
        </motion.div>
        {isMobile && (<Slider {...settings} className={styles.slider}>
        {mobileCarouselImages.map((img, index) => {
          return (
            <div key={index} className={styles.imgsSlide}>
              <img src={img} alt={img} />
            </div>
          );
        })}
      </Slider>)}
      </div>

      <div className={styles.weddingsInGoaContainer}>
        <HeadingTItle
          title={"Weddings in Goa"}
          subtitle={"Your Dream Destination"}
        />
        <p data-aos="fade-up" data-aos-once="true">
          What could be more enchanting than the fresh sea breeze blowing across
          your face? A vibrant sunset painting that can be your perfect backdrop
          or the soft sand beneath your feet? Not to forget even the gentle
          sound of the waves crashing nearby? Your dream wedding awaits you in
          Goa
        </p>

        <div className={styles.weddingsReelsContainer}>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}>
            <header className={styles.reelHeadijng}>Haldi</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754125278/Exotic%20data/Weddings%20Page/Haldi_aus1vu.mp4"
              }></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={200}>
            <header className={styles.reelHeadijng}>Mehendi</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754124658/Exotic%20data/Weddings%20Page/Mehendi_j4weqc.mp4"
              }></video>
          </div>

          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}>
            <header className={styles.reelHeadijng}>Sangeet</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754124650/Exotic%20data/Weddings%20Page/Sangeet_jshjvs.mp4"
              }></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={400}>
            <header className={styles.reelHeadijng}>Wedding</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754124659/Exotic%20data/Weddings%20Page/Wedding_ej5gec.mp4"
              }></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={500}>
            <header className={styles.reelHeadijng}>Hospitality</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754124640/Exotic%20data/Weddings%20Page/Hospitality_2_lts8bj.mp4"
              }></video>
          </div>
          <div
            className={styles.reelContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={600}>
            <header className={styles.reelHeadijng}>Hospitality</header>
            <video
              autoPlay
              loop
              muted
              controls
              src={
                "https://res.cloudinary.com/duh71fcas/video/upload/v1754124637/Exotic%20data/Weddings%20Page/Hospitality_wfdxjj.mov"
              }></video>
          </div>
        </div>
      </div>

      <div className={styles.howWeDoItContainer}>
        <h5 data-aos="fade-up" data-aos-once="true">
          How we do it
        </h5>

        <div className={styles.howWeDoItSubContainer}>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={100}>
            <img src={howWeDoItOne} alt="" />
            <header>Plan</header>
            <p>
              Once we’ve envisioned the story you wish to tell, we begin by
              meticulously planning everything, right from the venue to hampers
              and budget planning.
            </p>
          </div>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={200}>
            <img src={howWeDoItTwo} alt="" />
            <header>connect</header>
            <p>
              We make sure you’re equipped with the best artists in the
              business- skilled photographers, makeup artists, DJs and more,
              based on what’s right for you and your wedding.
            </p>
          </div>
          <div
            className={styles.howWeDoItItemContainer}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay={300}>
            <img src={howWeDoItThree} alt="" />
            <header>Design</header>
            <p>
              Whether you’re looking for an extravagant or an intimate wedding,
              we beautifully craft everything from set design to sound, lights
              and flowers.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          className={styles.getInTouchContainer}>
          <a
            target="_blank"
            href="https://wa.me/919822971391?text=Hi%20Exotic%20Goa%2C%20I%20am%20interested%20in%20your%20Wedding%20Event%20Planners%20services.">
            <h6>Get in touch</h6>
            <BsWhatsapp className={styles.whatsappicon} />
          </a>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.venuesWeHaveWorkedWith}>
        <h4>Venues We Do Weddings At</h4>
        <div className={styles.carousel}>
          <div
            className={styles.carouseltrack}
            style={{ animationDuration: `${speed}s` }}>
            {duplicatedItems.map((item, index) => (
              <div className={styles.carouselitem} key={index}>
                <img src={item} alt={`Item ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="true"
        className={styles.testimonialsContainer}>
        <h3>Testimonials</h3>

        <Slider {...settings} className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialsSubContainer}>
              <div className={styles.testimonialSubSub}>
                <div className={styles.testimonialContent}>
                  <RiDoubleQuotesL className={styles.quoteIcon} />
                 <span>{testimonial.textOne}</span>
                 <span>{testimonial.textTwo}</span>
                  <header>{testimonial.author}</header>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default WeddingsPage;
