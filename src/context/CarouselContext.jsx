import React, { createContext, useContext } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const images = {
    homepage: [
      "/Pictures/home-wedding-picture-exotic-goa-one.jpg",
      "/Pictures/home-wedding-picture-exotic-goa-two.jpg",
      "/Pictures/home-wedding-picture-exotic-goa-three.jpg",
    ],
    homepageWedding: [
      "/Pictures/wedding-521.jpg",
      "/Pictures/wedding-516.jpg",
      "/Pictures/wedding-515.jpg",
      "/Pictures/wedding-514.jpg",
      "/Pictures/wedding-329.jpg",
    ],
    homepageCorporate: [
      "/Pictures/shal0315.jpg",
      "/Pictures/shal0439.jpg",
      "/Pictures/shal0334.jpg",
    ],
    portfolioWedding: [
      "/Pictures/wedding-260.jpg",
      "/Pictures/wedding-267.jpg",
      "/Pictures/wedding-271.jpg",
    ],
    portfolioMiceCorporate: [
      "/public/temp/11.jpg",
      "/public/temp/12.jpg",
      "/public/temp/13.jpg",
    ],
    portfolioHospitality: [
      "/public/temp/16.jpg",
      "/public/temp/17.jpg",
      "/public/temp/18.jpg",
    ],
    portfolioLuxuryFuniture: [
      "/public/temp/21.webp",
      "/public/temp/22.webp",
      "/public/temp/23.webp",
    ],
    aboutUsCarousel: ["/public/temp/1.webp", "/temp/4.jpg", "/temp/7.jpg"],
    weddingsCarousel: ["/temp/2.webp", "/temp/5.jpg", "/temp/8.jpg"],
    corporateCarousel: ["/temp/8.jpg", "/temp/9.jpg", "/temp/10.jpg"],
    servicesCarousel: ["/temp/16.jpg", "/temp/17.jpg", "/temp/18.jpg"],
  };

  return (
    <ImageContext.Provider value={images}>{children}</ImageContext.Provider>
  );
};

export const useImages = () => {
  return useContext(ImageContext);
};
