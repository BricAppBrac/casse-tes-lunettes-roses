import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ListeBDCards from "../components/ListeBDCards";
import Footer from "../components/Footer";

const Home = () => {
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
        {/* <SortNavbar /> */}

        <div className="BDcards-container">
          <ListeBDCards />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
