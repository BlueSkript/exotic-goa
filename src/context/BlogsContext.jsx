import React, { createContext, useContext } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const blogs = {
    BlogOne: {
      date: "01",
      month: "Dec",
      heading: `An immersive global 
      `,

      route:
        "https://www.weddingsutra.com/blog/an-immersive-global-experience-in-goa-this-couples-wedding-took-a-cue-from-international-destinations-to-orchestrate-a-series-of-epic-celebrations/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068931/Exotic%20data/Blog%20Page/blogCovers/g00lgc0dgxzpy39pckjf.webp",
    },
    BlogTwo: {
      date: "01",
      month: "Dec",
      heading: `Witness the whimsical
      `,

      route:
        "https://www.weddingsutra.com/blog/witness-the-whimsical-allure-of-this-vow-renewal-ceremony-amidst-goas-coastal-charm/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068962/Exotic%20data/Blog%20Page/blogCovers/a2smdsnyjyno1cuchrp3.webp",
    },
    BlogThree: {
      date: "01",
      month: "Dec",
      heading: `The stars descended from`,

      route:
        "https://www.weddingsutra.com/blog/the-stars-descended-from-the-sky-at-this-couples-cocktail-celebration-inspired-by-van-goghs-starry-night-masterpiece/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068976/Exotic%20data/Blog%20Page/blogCovers/k0jgtwozai7vrzbqeqhl.webp",
    },
    BlogFour: {
      date: "01",
      month: "Dec",
      heading: `Maahin Daruwala and Arsh`,

      route:
        "https://www.weddingsutra.com/real-weddings/featured-weddings/maahin-daruwala-and-arsh-biran-holiday-inn-resort-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068702/Exotic%20data/Blog%20Page/blogCovers/p6lhwamqyolqeimdnuau.webp",
    },
    BlogFive: {
      date: "01",
      month: "Dec",
      heading: `Ishita Dahuja and Rhythm Flanked by the dramatic sunset sky this couples's`,

      route:
        "https://www.weddingsutra.com/real-weddings/featured-weddings/ishita-dahuja-and-rhythm-malhotra-the-zuri-white-sands-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068800/Exotic%20data/Blog%20Page/blogCovers/agtzsl7h7ahwdhzfajlu.webp",
    },
    BlogSix: {
      date: "01",
      month: "Dec",
      heading: `Bhavya and Vedant Gupta,The couple included their fur baby in their wedding`,

      route:
        "https://www.weddingsutra.com/real-weddings/destination-weddings/bhavya-and-vedant-gupta-beleza-by-the-beach-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068954/Exotic%20data/Blog%20Page/blogCovers/uydhuyl2lts6nhbpig6a.webp",
    },
    BlogSeven: {
      date: "01",
      month: "Dec",
      heading: `Shivangi and Ankit, From a Bollywood night Sangeet to a sundowner`,

      route:
        "https://www.weddingsutra.com/real-weddings/featured-weddings/shivangi-and-ankit-sharma-holiday-inn-resort-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068815/Exotic%20data/Blog%20Page/blogCovers/lhpilm5le0i9qgprrhqr.webp",
    },
    BlogEight: {
      date: "01",
      month: "Dec",
      heading: `Nikita and Ankur, A vibrant celebration of two cultures framed against`,

      route:
        "https://www.weddingsutra.com/real-weddings/destination-weddings/nikita-and-ankur-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754069001/Exotic%20data/Blog%20Page/blogCovers/nfsvwydcdldamfhtqx0h.webp",
    },
    BlogNine: {
      date: "01",
      month: "Dec",
      heading: `Saachi and Pranav, From a rousing Bollywood themed Sangeet to a`,

      route:
        "https://www.weddingsutra.com/real-weddings/featured-weddings/saachi-and-pranav-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068840/Exotic%20data/Blog%20Page/blogCovers/l63bchxr43mmwf9cqf1a.webp",
    },
    BlogTen: {
      date: "01",
      month: "Dec",
      heading: `Krupa and Rahul, Surrounded by the lush beauty of Goa, this couple’s wedding m`,

      route:
        "https://www.weddingsutra.com/real-weddings/featured-weddings/krupa-and-rahul-goa/",
      thumbnail: "https://res.cloudinary.com/duh71fcas/image/upload/v1754068941/Exotic%20data/Blog%20Page/blogCovers/gp93ccnncxw8xg7vtpc2.webp",
    },
  };

  return (
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};

export const useBlogs = () => {

  return useContext(BlogsContext);
};
