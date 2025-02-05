import React, { useState } from "react";
import ServicesCarousel from "../components/Services/ServicesCarousel";
import styles from "../styles/Services/ServicesPage.module.css";
import ServicesCard from "../components/Services/ServicesCard";
import VerticalCarousel from "../components/Services/VerticalCarousel";

function OurServicesPage() {
  const [currentService, setcurrentService] = useState(0);
  const cardData = [
    {
      name: "Venue management",
      content: `Whether you desire beachfront vistas or elegant ballroom settings, if you're in search for the ideal venue we have you covered.`,
      icon: "/icons/wedding.png",
    },
    {
      name: "Event Concept & Design",
      content: `From the initial 'First Meeting' to the memorable 'Last Dance, you can count on receiving 'Impeccable Personal Attention' and 'Expert Assistance' every step of the way.`,
      icon: "/icons/sketch.png",
    },
    {
      name: "Hospitality & Logistics",
      content: `Our comprehensive suite of hospitality services encompasses receiving RSVPs from your guests, overseeing their lodging arrangements and facilitating seamless coordination among various hotel departments.`,
      icon: "/icons/cart.png",
    },
    {
      name: "Artist Management",
      content: `Our specialists excel at crafting entertainment that transforms your event into a larger-than-life experience. From live musicians to DJs, aerial performers to bands, we recommend and arrange the most incredible entertainers.`,
      icon: "/icons/singer.png",
    },
    {
      name: "Food & Beverage Services",
      content: `We take pride in offering the most delectable cuisine and top-tier catering services for a range of occasions, including corporate events and weddings.`,
      icon: "/icons/room-service.png",
    },
    {
      name: "Technical Solutions",
      content: `When the event crew is on board, there's no need for you to delve into technical details. Lights, camera, sound, and more are all set up and ready in our equipment arsenal. So, all you need to do is maintain the excitement and carry on with the show.`,
      icon: "/icons/tech-support.png",
    },
    {
      name: "Cooling Solutions",
      content: `Exotic Event Cooling Solutions is a full-service rental company, providing cooling solutions, overhead and directional fans, etc.`,
      icon: "/icons/fan.png",
    },
    {
      name: "Luxury Furniture Rentals",
      content: `We provide event furniture rentals and accessories for corporate events, entertainment events, premieres, conferences and much more.`,
      icon: "/icons/couch.png",
    },
  ];

  const images = [
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal9603.jpg",
      "/Pictures/shal9751.jpg",
      "/Pictures/shal0324.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
    [
      "/Pictures/shal0071.jpg",
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0325.jpg",
    ],
  ];

  const handleCardClick = (index) => {
    setcurrentService(index);
  };

  return (
    <>
      <ServicesCarousel />

      <div className={styles.servicesContainer}>
        <header>Our Services</header>

        <div className={styles.servicesSubContainer}>
          <div className={styles.services}>
            {cardData.map((card, index) => {
              return (
                <ServicesCard
                  key={`${card} ${index}`}
                  title={card.name}
                  subtitle={card.content}
                  icon={card.icon}
                  index={index}
                  handleCardClick={handleCardClick}
                />
              );
            })}
          </div>
          <div className={styles.servicesGallery}>
            <VerticalCarousel images={images[currentService]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServicesPage;
