import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Applications = () => {
  useEffect(() => {
    // Défilement vers le haut de la page au chargement
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="nav">
        <Navbar />
      </div>
      <div className="homeliste-content">
        <div className="applications-container">
          <h2>Liste des applications</h2>
          <h3>VG+</h3>
          <h3>Autres à venir</h3>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Applications;
