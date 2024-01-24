import React, { useState } from "react";

const ListeBDCards = () => {
  const [imgIndices, setImgIndices] = useState({
    coeurVegan: 0,
    cochons: 0,
  });

  const renderStars = () => (
    <h3>
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
    </h3>
  );

  const imgCoeurVeganList = [
    "imgCoeurVeganA",
    "imgCoeurVeganB",
    "imgCoeurVeganC",
    "imgCoeurVeganD",
  ];

  const imgCochonsList = [
    "petitscochonspage1",
    "petitscochonspage2",
    "petitscochonspage3",
    "petitscochonspage4",
    "petitscochonspage5",
    "petitscochonspage6",
    "petitscochonspage7",
    "petitscochonspage8",
    "petitscochonspage9",
  ];

  const handlePrevClick = (category, listLength) => {
    setImgIndices({
      ...imgIndices,
      [category]: (imgIndices[category] - 1 + listLength) % listLength,
    });
  };

  const handleNextClick = (category, listLength) => {
    setImgIndices({
      ...imgIndices,
      [category]: (imgIndices[category] + 1) % listLength,
    });
  };

  const renderButton = (condition, handleClick, iconClass) =>
    condition && (
      <button onClick={handleClick}>
        <i className={iconClass}></i>
      </button>
    );

  const renderImage = (imgList, category) => (
    <div className="BDCard">
      <div className={imgList[imgIndices[category]]}></div>
    </div>
  );

  return (
    <div className="listeBDCards">
      <div className="BDCard">{renderImage(imgCochonsList, "cochons")}</div>
      <div className="BDCardMultiple">
        <div className="buttonprev">
          {renderButton(
            imgIndices["cochons"] > 0,
            () => handlePrevClick("cochons", imgCochonsList.length),
            "fa-solid fa-square-caret-left"
          )}
        </div>
        <div className="buttonnext">
          {renderButton(
            imgIndices["cochons"] < imgCochonsList.length - 1,
            () => handleNextClick("cochons", imgCochonsList.length),
            "fa-solid fa-square-caret-right"
          )}
        </div>
      </div>
      {renderStars()}

      <div className="BDCard">
        {renderImage(imgCoeurVeganList, "coeurVegan")}
      </div>
      <div className="BDCardMultiple">
        <div className="buttonprev">
          {renderButton(
            imgIndices["coeurVegan"] > 0,
            () => handlePrevClick("coeurVegan", imgCoeurVeganList.length),
            "fa-solid fa-square-caret-left"
          )}
        </div>
        <div className="buttonnext">
          {renderButton(
            imgIndices["coeurVegan"] < imgCoeurVeganList.length - 1,
            () => handleNextClick("coeurVegan", imgCoeurVeganList.length),
            "fa-solid fa-square-caret-right"
          )}
        </div>
      </div>
      {renderStars()}

      <div className="BDCard">
        <div className="imgOmnivoreChoix"></div>
      </div>
      {renderStars()}

      <div className="BDCard">
        <div className="imgVache"></div>
      </div>
    </div>
  );
};

export default ListeBDCards;
