import React, { useState } from "react";

const ListeBDCards = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const imgCoeurVeganList = [
    "imgCoeurVeganA",
    "imgCoeurVeganB",
    "imgCoeurVeganC",
    "imgCoeurVeganD",
  ];

  const imgCochonsList = [
    "../assets/img/cochons004/petitscochonspage1",
    "../assets/img/cochons004/petitscochonspage2",
    "../assets/img/cochons004/petitscochonspage3",
    "../assets/img/cochons004/petitscochonspage4",
    "../assets/img/cochons004/petitscochonspage5",
    "../assets/img/cochons004/petitscochonspage6",
    "../assets/img/cochons004/petitscochonspage7",
    "../assets/img/cochons004/petitscochonspage8",
    "../assets/img/cochons004/petitscochonspage9",
  ];

  const handlePrevClickCoeur = () => {
    setCurrentImgIndex(
      (prevIndex) =>
        (prevIndex - 1 + imgCoeurVeganList.length) % imgCoeurVeganList.length
    );
  };
  const handlePrevClickCochons = () => {
    setCurrentImgIndex(
      (prevIndex) =>
        (prevIndex - 1 + imgCochonsList.length) % imgCochonsList.length
    );
  };

  const handleNextClickCoeur = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex + 1) % imgCoeurVeganList.length
    );
  };

  const handleNextClickCochons = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgCochonsList.length);
  };

  return (
    <div className="listeBDCards">
      <div className="BDCard">
        {/* Afficher l'image actuelle */}
        <div className={imgCochonsList[currentImgIndex]}></div>
      </div>
      <div className="BDCardMultiple">
        {/* Afficher le bouton Previous uniquement si ce n'est pas la première image */}
        {currentImgIndex > 0 && (
          <button onClick={handlePrevClickCochons}>
            <i className="fa-solid fa-square-caret-left"></i>
          </button>
        )}
        {/* Afficher le bouton Next uniquement si ce n'est pas la dernière image */}
        {currentImgIndex < imgCochonsList.length - 1 && (
          <button onClick={handleNextClickCochons}>
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
        {/* Afficher l'image actuelle */}
        <div className={imgCoeurVeganList[currentImgIndex]}></div>
      </div>
      <div className="BDCardMultiple">
        {/* Afficher le bouton Previous uniquement si ce n'est pas la première image */}
        {currentImgIndex > 0 && (
          <button onClick={handlePrevClickCoeur}>
            <i className="fa-solid fa-square-caret-left"></i>
          </button>
        )}
        {/* Afficher le bouton Next uniquement si ce n'est pas la dernière image */}
        {currentImgIndex < imgCoeurVeganList.length - 1 && (
          <button onClick={handleNextClickCoeur}>
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
