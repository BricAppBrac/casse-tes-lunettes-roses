import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  useEffect(() => {
    // Défilement vers le haut de la page au chargement
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="div">
      <div className="nav">
        <Navbar />
      </div>
      <div className="contact-container">
        <div className="contact-text">
          <h3>Pour me contacter, utiliser Instagram svp</h3>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
