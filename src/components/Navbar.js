import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    console.log("handleLogoClick");
    navigate("/");
  };

  const handleInstagram = () => {
    console.log("handleInstagram");
    window.open(
      "https://www.instagram.com/casse.tes.lunettes.roses/",
      "_blank"
    );
  };

  const handleHome = () => {
    console.log("handleHome");
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <div className="imglogo" onClick={() => handleLogoClick()}></div>
          <h1>Casse Tes Lunettes Roses!</h1>

          <div className="nav-buttons">
            <ul>
              <li>
                <button onClick={() => handleHome()}>
                  {" "}
                  <i className="fa-solid fa-house"></i>
                </button>
              </li>
              <li>
                <button onClick={() => handleInstagram()}>
                  {" "}
                  <i className="fa-brands fa-square-instagram"></i>
                </button>
              </li>
              {/* <li>
              <NavLink
                to="/"
                className={!isListeDesRecettesActive ? "nav-active" : ""}
              >
                Menu de la semaine
              </NavLink>
              <span>
                Inscription gratuite pour pouvoir créer le Menu de la Semaine
              </span>
            </li> */}
            </ul>
            {/* <div className="nav-buttons">
            <button onClick={() => handleSignUp()}>Inscription gratuite</button>
            <button onClick={() => handleSignIn()}>Espace perso</button>
          </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
