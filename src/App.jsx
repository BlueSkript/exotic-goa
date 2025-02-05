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
import WhatsApp from "./components/whatsApp";
import "aos/dist/aos.css";
import BlogsDisplay from "./components/BlogsDisplay";
import { BlogsProvider } from "./context/BlogsContext";
function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
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
          <Route
            path="/wedding-hospitality"
            element={<WeddingHospitalityPage />}></Route>
          <Route path="/our-services" element={<OurServicesPage />}></Route>
          <Route path="/blogs" element={<BlogsPage />}></Route>
          <Route path="/contact-us" element={<ContactUsPage />}></Route>
          <Route
            path="/exotic-blogs"
            element={<BlogsDisplay blogsKey={"this is the key"} />}></Route>
        </Routes>
        <WhatsApp />
        <Footer />
      </BlogsProvider>
    </Router>
  );
}

export default App;
