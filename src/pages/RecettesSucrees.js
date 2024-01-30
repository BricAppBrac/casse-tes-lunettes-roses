import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ListeRecettesCards from "../components/ListeRecettesCards";
import Footer from "../components/Footer";

const RecettesSucrees = () => {
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
        <div className="recettes-container">
          <ListeRecettesCards type={"sucrees"} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default RecettesSucrees;
