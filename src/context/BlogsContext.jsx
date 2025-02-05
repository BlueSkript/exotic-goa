import React, { createContext, useContext } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const blogs = {
    BlogOne: {
      date: "09",
      month: "Dec",
      content: `Destination Weddings Goa - The best gift to your spouse. 
      This is the content for this blog.`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "/exotic-blogs",
    },
    BlogTwo: {
      date: "10",
      month: "Nov",
      content: `Destination Weddings Goa - The best gift to your spouse. 
      This is the content for this blog.`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "blog-two",
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
