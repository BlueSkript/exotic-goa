import React, { createContext, useContext } from "react";

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const blogs = {
    BlogOne: {
      date: "01",
      month: "Dec",
      heading: `Destination Weddings Goa - The best gift to your spouse. 
      `,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "/blogs/destination-weddings-Goa",
      thumbnail: "/temp/20.webp",
      content: `The best gift for an adventurous to-be spouse would be a classy beach wedding in Goa. In fact it’s not just your spouse who’d appreciate it, but also your guests would have a good time enjoying a beach wedding. A Destination wedding is always a great way to entertain your guests and that is sure to make you and your spouse the hot topic of discussion for the season. 

You could also plan up a theme wedding and make it all the more entertaining. We would be glad to assist you with some exciting options to plan that. You could also plan a nice evening wedding reception with some seafood and wine on the beach, followed by a beach campfire to make it perfectly Goan for your guests.

 Imagine playing beach volleyball with your guests a day before your wedding in Goa. It sure sounds fun and exciting to anyone and is quite an adventure in itself. However, ensure that this adventure does not turn out to be a misadventure. To do that you need to plan things well and unless you are a professional, you are sure to leave out something.

How to make your beach wedding special?

You could do a lot of stuff that would make your wedding in Goa all the more special for your to-be spouse.  Below listed are some suggestions that you could consider.

You could plan to drive off with your spouse in a Bentley after your wedding and we can definitely arrange that or any other wedding car for you.
Plan a surprise beach hopping for your spouse immediately after your marriage, and this time we don’t mean just another beach in Goa. We suggest that you rush off to the beaches in Bali for a honeymoon and we could help you plan that wonderful surprise.
Throw a wedding reception on a cruise with some traditional Goan dance and fenny for your guests.
 Try taking your special one on a water sport spree just a day before your big day.
Arrange a surprise beach cocktail party for your to-be spouse just a day before your marriage.
Our designated wedding planners would try their best to make your wedding in Goa a memorable event for you, your spouse and your guests. With years of experience, we offer wedding assistance that has been trusted by hundreds of satisfied customers.`,
    },
    BlogTwo: {
      date: "30",
      month: "Nov",
      heading: `Get Wedding Ready With the Best Wedding Planners in Goa!`,
      images: ["/temp/16.jpg", "/temp/17.jpg", "/temp/18.jpg"],
      route: "/blogs/get-wedding-ready-with-the-best-wedding-planners",
      thumbnail: "/temp/23.webp",
      content: `What is your dream wedding? There’s no point in denying it now or being shy about it- if you’re on this page looking up weddings in Goa it just means one thing- the wedding bells are ringing and we hear them loud and clear! A sunset wedding in Goa is what you seek? Worry not. When it comes to destination weddings, Goa holds the crown and sits proud on the sand throne basking away in the beautiful sunlight enjoying the winds from the sea. That’s right- your wedding in Goa is as beautiful as you always imagined it to be- perhaps even more so given how this Indian state is loaded with the salty air mingling with the sounds of laughter and cheer stretching through the lengths of the sea! What makes Goa so special? Why is it that when people consider the option of sunset weddings, Goa pops into their head as the first and best choice?

The amazing Food

Well there’s no denying the fact that Goa hosts some of the best event planners and chefs who cater to your wedding needs. We are more than proud to say that we associate with the best wedding event management services in Goa who not only guarantee to bring to you the best of the best food and cake- wine to wash it down if you will. They also bring these to you so beautifully packaged with some well dressed waiters at your service- it will be a total stop-staring-and-start-eating situation. For you and your guests.

The Wedding Planners

Oh yes. As a popular haven for destination weddings, Goa is also the residence of some of the country’s top wedding planners. Our Wedding Planners in Goa are renowned for the following-

– being highly approachable. They understand that you want your wedding to be perfect. Using their creativity and expertise while being watched over by you, they make magic come true in the form of your dream wedding.

– Of being OBSESSED with perfection. You think you are too absorbed in your wedding? Our wedding planners in Goa will live and breathe your wedding till the very end and make sure that every detail is paid so much attention to. They make sure that everyone does their job- all you have to do is kick back and get pampered while they handle it all.`,
    },
    BlogThree: {
      date: "25",
      month: "Oct",
      heading: `Sunset Weddings in Goa – Dreams Do Come True!`,
      images: ["/temp/14.jpg", "/temp/22.webp", "/temp/25.jpg"],
      route: "/blogs/sunset-weddings-in-goa",
      thumbnail: "/temp/25.jpg",
      content: `Visualize this, a beautiful sunset besides one of the best beaches in Goa.

What brought you here? White sandy shores, the silence of the waves and the dream of having your wedding in one of the most beautiful coastlines of India.

Before we venture into the captivating world of sunset weddings in Goa, take a moment with us. Can you envision your ideal wedding on the beaches of Goa? Consider every nuance, from the evident elements to the heartfelt desires that lie within.

Are you envisioning a classically traditional wedding, or is a more modern celebration that aligns with today’s contemporary trends appealing to you? Perhaps it’s the romance of beachfront weddings that draws you in, or the soothing serenity of a seaside venue. How much significance do you place on the finer details like decorations, flowers, and culinary delights? We understand that every aspect holds paramount importance because, after all, it’s your wedding day. That’s precisely why we’re thrilled to introduce you to the top wedding planners in Goa. Yes, you read that correctly. So, what sets these wedding planners apart from their myriad competitors?

Exceptional Expertise: In Goa’s competitive wedding planning landscape, our experts consistently rise to the pinnacle of the industry. They are renowned for curating modern, traditional, and opulent royal weddings, transforming your dreams into a tangible reality.

Meticulous Excellence: Our wedding planners are not merely coordinators; they are artisans of perfection. Every detail holds significance, and their unwavering dedication to excellence ensures your wedding day and venue are so breathtaking that you’ll rediscover love—this time with your own wedding.

Budget-Friendly: We understand that the costs of a Goa wedding can accumulate swiftly. Take a deep breath, for our rates are tailored to your budget, ensuring you can realize the extraordinary wedding you’ve always envisioned.

Imagery and Descriptions: Picture yourself standing on the shoreline with your partner, caressed by the gentle sea breeze, as the sun paints the sky in brilliant shades of orange and pink. This setting transcends mere beauty; it etches a timeless moment into your memory.

Testimonials and Social Proof: Don’t just take our word for it. Hear from the delighted couples who have experienced our extraordinary services:

Engaging Calls to Action: Eager to transform your dream Goa wedding into an unforgettable reality? Connect with our wedding planners today. Explore the boundless possibilities and craft your unique love story against the backdrop of Goa’s enchanting sunsets. Your dream wedding in Goa beckons, where the sunsets mark just the beginning of a remarkable journey. With our meticulous and budget-friendly wedding planners at your side, it’s a voyage of perfection and beauty. Embrace the allure of Goa, and let your love story unfold against the backdrop of these stunning sunsets.`,
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
