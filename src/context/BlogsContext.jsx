import React, { createContext, useContext } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const blogs = {
    BlogOne: {
      date: "01",
      month: "Dec",
      content: `Destination Weddings Goa - The best gift to your spouse. 
      This is the content for this blog.`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "/exotic-blogs",
      thumbnail: "/public/temp/20.webp",
    },
    BlogTwo: {
      date: "30",
      month: "Nov",
      content: `Get Wedding Ready With the Best Wedding Planners in Goa!`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "blog-two",
      thumbnail: "/public/temp/23.webp",
    },
    BlogThree: {
      date: "25",
      month: "Oct",
      content: `Sunset Weddings in Goa – Dreams Do Come True!`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "blog-two",
      thumbnail: "/public/temp/25.jpg",
    },
  };

  return (
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};

export const useBlogs = () => {
  console.log(useContext(BlogsContext));
  return useContext(BlogsContext);
};
