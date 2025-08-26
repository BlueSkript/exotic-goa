import React, { useEffect } from "react";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import AboutUsPage from "./pages/AboutUsPage";
import WeddingsPage from "./pages/WeddingsPage";
import CorporatePage from "./pages/CorporatePage";
import WeddingHospitalityPage from "./pages/WeddingHospitalityPage";
import OurServicesPage from "./pages/OurServicesPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsApp from "./components/whatsApp";
import BlogsDisplay from "./components/BlogsDisplay";
import { BlogsProvider } from "./context/BlogsContext";
import Gallery from "./pages/Gallery";
import MoodBoard from "./components/MoodBoard";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
    });
  }, []);
  return (
    <Router>
      <BlogsProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/weddings" element={<WeddingsPage />}></Route>
          <Route path="/corporate" element={<CorporatePage />}></Route>
          <Route path="/exotic-goa-gallery" element={<Gallery />}></Route>
          <Route
            path="/wedding-hospitality"
            element={<WeddingHospitalityPage />}></Route>
          <Route path="/our-services" element={<OurServicesPage />}></Route>
          <Route path="/blogs" element={<BlogsPage />}></Route>
          <Route path="/contact-us" element={<ContactUsPage />}></Route>
          <Route path="/moodboard" element={<MoodBoard />}></Route>
          <Route
            path="/blogs/destination-weddings-Goa"
            element={<BlogsDisplay blogsKey={'BlogOne'} />}></Route>
          <Route
            path="/blogs/get-wedding-ready-with-the-best-wedding-planners"
            element={<BlogsDisplay blogsKey={'BlogTwo'} />}></Route>
          <Route
            path="/blogs/sunset-weddings-in-goa"
            element={<BlogsDisplay blogsKey={'BlogThree'} />}></Route>
        </Routes>
        <WhatsApp />
        <Footer />
      </BlogsProvider>
    </Router>
  );
}

export default App;
