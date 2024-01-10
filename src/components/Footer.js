import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container1">
        <div className="liens-footer">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
          </ul>
        </div>
        <div className="mentions-footer">
          <ul>
            <li>
              <NavLink to="/mentions-legales">Mentions Légales</NavLink>
            </li>
            <li className="buy-me-a-coffee">
              <NavLink
                to="https://www.buymeacoffee.com/casseteslunettesroses"
                id="buy-me-a-coffee"
                target="_blank"
              >
                <i className="fa-solid fa-mug-saucer"></i> Pour m'aider à
                produire plus de contenu! Merci!
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-footer">
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
      </div>
      <div className="footer-container2">
        <div className="footertext">
          <h3>CasseTesLunettesRoses.fr </h3>
        </div>
        <div className="footertext">
          <h3>2024 © Copyright - Tous droits réservés</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
