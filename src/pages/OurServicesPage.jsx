import React, { useState, useRef, useEffect } from "react";
import ServicesCard from "../components/Services/ServicesCard";
import VerticalCarousel from "../components/Services/VerticalCarousel";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import styles from "../styles/Services/ServicesPage.module.css";
import carouselPictures from '../../JSONs/temp.json'
const cardData = [
  {
    name: "Venue management",
    content: `Whether you desire beachfront vistas or elegant ballroom settings, if you're in search for the ideal venue we have you covered.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/decor.webp",
  },
  {
    name: "Event Concept & Design",
    content: `From the initial 'First Meeting' to the memorable 'Last Dance, you can count on receiving 'Impeccable Personal Attention' and 'Expert Assistance' every step of the way.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/wedding.webp",
  },
  {
    name: "Hospitality & Logistics",
    content: `Our comprehensive suite of hospitality services encompasses receiving RSVPs from your guests, overseeing their lodging arrangements and facilitating seamless coordination among various hotel departments.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074505/Exotic%20data/Services/hospitality.webp",
  },
  {
    name: "Artist Management",
    content: `Our specialists excel at crafting entertainment that transforms your event into a larger-than-life experience. From live musicians to DJs, aerial performers to bands, we recommend and arrange the most incredible entertainers.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074507/Exotic%20data/Services/vendor.webp",
  },
  {
    name: "Food & Beverage Services",
    content: `We take pride in offering the most delectable cuisine and top-tier catering services for a range of occasions, including corporate events and weddings.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074508/Exotic%20data/Services/food.webp",
  },
  {
    name: "Technical Solutions",
    content: `When the event crew is on board, there's no need for you to delve into technical details. Lights, camera, sound, and more are all set up and ready in our equipment arsenal. So, all you need to do is maintain the excitement and carry on with the show.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074511/Exotic%20data/Services/clentservicing.webp",
  },
  {
    name: "Cooling Solutions",
    content: `Exotic Event Cooling Solutions is a full-service rental company, providing cooling solutions, overhead and directional fans, etc.`,
    icon: "https://res.cloudinary.com/duh71fcas/image/upload/v1754074510/Exotic%20data/Services/wedding.webp",
  },
  {
    name: "Luxury Furniture Rentals",
    content: `We provide event furniture rentals and accessories for corporate events, entertainment events, premieres, conferences and much more.`,
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

          <motion.div
            initial={{ opacity: 0, translateX: 70 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={styles.servicesGallery}>
            <VerticalCarousel images={carouselPictures} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default OurServicesPage;
