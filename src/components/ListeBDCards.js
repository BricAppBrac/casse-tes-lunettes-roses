import React, { useState } from "react";

const ListeBDCards = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const imgCoeurVeganList = [
    "imgCoeurVeganA",
    "imgCoeurVeganB",
    "imgCoeurVeganC",
    "imgCoeurVeganD",
  ];

  const handlePrevClick = () => {
    setCurrentImgIndex(
      (prevIndex) =>
        (prevIndex - 1 + imgCoeurVeganList.length) % imgCoeurVeganList.length
    );
  };

  const handleNextClick = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex + 1) % imgCoeurVeganList.length
    );
  };

  return (
    <div className="listeBDCards">
      <div className="BDCard">
        {/* Afficher l'image actuelle */}
        <div className={imgCoeurVeganList[currentImgIndex]}></div>
      </div>
      <div className="BDCardMultiple">
        {/* Afficher le bouton Previous uniquement si ce n'est pas la première image */}
        {currentImgIndex > 0 && (
          <button onClick={handlePrevClick}>
            <i className="fa-solid fa-square-caret-left"></i>
          </button>
        )}
        {/* Afficher le bouton Next uniquement si ce n'est pas la dernière image */}
        {currentImgIndex < imgCoeurVeganList.length - 1 && (
          <button onClick={handleNextClick}>
            <i className="fa-solid fa-square-caret-right"></i>
          </button>
        )}
      </div>
      <h3>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>
      <div className="BDCard">
        <div className="imgOmnivoreChoix"></div>
      </div>
      <h3>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>
      <div className="BDCard">
        <div className="imgVache"></div>
      </div>
    </div>
  );
};

export default ListeBDCards;
