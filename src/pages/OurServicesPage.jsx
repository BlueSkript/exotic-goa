import React, { useState, useRef, useEffect } from "react";
import ServicesCard from "../components/Services/ServicesCard";
import VerticalCarousel from "../components/Services/VerticalCarousel";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import styles from "../styles/Services/ServicesPage.module.css";
import carouselPictures from '../../JSONs/Services section corousel.json'
const cardData = [
  {
    name: "Venue Management",
    content: `Whether you envision a romantic beach ceremony or a grand ballroom celebration, our team ensures you find the perfect venue and handles every detail to match your vision flawlessly.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/decor.webp",
  },
  {
    name: "Event Concept & Design",
    content: `From the very first planning meeting to the final dance of the evening, our creative team provides personalized attention and expert guidance to craft a unique, memorable, and seamless event experience.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/wedding.webp",
  },
  {
    name: "Hospitality & Logistics",
    content: `We manage RSVPs, guest accommodations, travel arrangements, and hotel coordination to ensure every aspect of hospitality and logistics runs smoothly, letting you and your guests enjoy the event stress-free.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074505/Exotic%20data/Services/hospitality.webp",
  },
  {
    name: "Artist Management",
    content: `Our experts curate and arrange entertainment that elevates your event. From DJs, live musicians, and bands to aerial performers and specialty acts, we connect you with talent that leaves lasting impressions.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074507/Exotic%20data/Services/vendor.webp",
  },
  {
    name: "Food & Beverage Services",
    content: `We deliver world-class catering for weddings, corporate events, and celebrations. With delectable cuisine, professional service, and thoughtful presentation, our food and beverages create unforgettable dining experiences for your guests.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074508/Exotic%20data/Services/food.webp",
  },
  {
    name: "Technical Solutions",
    content: `Our technical team handles everything behind the scenes—sound, lights, staging, video, and more. We provide reliable equipment and support so your event runs smoothly while you focus on enjoying the moment.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074511/Exotic%20data/Services/clentservicing.webp",
  },
  {
    name: "Cooling Solutions",
    content: `We offer professional event cooling rentals, including overhead fans, directional units, and portable systems. Our team ensures a comfortable atmosphere so your guests stay relaxed and enjoy every moment.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/wedding.webp",
  },
  {
    name: "Luxury Furniture Rentals",
    content: `From conferences and premieres to weddings and private gatherings, we provide stylish, high-quality furniture and accessories that transform any event space into a sophisticated, comfortable, and elegant setting.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074509/Exotic%20data/Services/invitations.webp",
  },
];



function OurServicesPage() {
  const [currentService, setcurrentService] = useState(0);
  const serviceRefs = useRef([]);

  

  const handleCardClick = (index) => {
    setcurrentService(index);

    if (serviceRefs.current[index]) {
      serviceRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <NavBar bgColor={true} />
      

      <div className={styles.servicesContainer}>
        <header>Our Services</header>

        <div className={styles.servicesSubContainer}>
          <div className={styles.services}>
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className={`${styles.serviceCard} ${
                  currentService === index ? styles.highlight : ""
                }`}
                style={{ opacity: currentService === index ? 1 : 0.8 }}>
                <ServicesCard
                  title={card.name}
                  subtitle={card.content}
                  icon={card.icon}
                  index={index}
                  handleCardClick={handleCardClick}
                  move={index % 2 === 0}
                />
              </div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, translateX: 70 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={styles.servicesGallery}>
            <VerticalCarousel images={carouselPictures} />
          </motion.div> */}
        </div>
      </div>
    </>
  );
}

export default OurServicesPage;
