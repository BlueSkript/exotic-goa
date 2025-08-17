import React from "react";
import styles from "../styles/Whatsapp.module.css";
function WhatsApp() {
  return (
    <div className={styles.whatsappContainer}>
      <a
        target="_blank"
        href="https://wa.me/919822971391?text=Hi%20Exotic%20Goa%2C%20I%20am%20interested%20in%20your%20Wedding%20Event%20Planners%20services.">
        <img src="/whatsapp.png" alt="exotic-goa-contact-whatsapp" />
      </a>
    </div>
  );
}

export default WhatsApp;
