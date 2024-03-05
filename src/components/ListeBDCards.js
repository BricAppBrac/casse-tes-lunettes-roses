import React, { useState } from "react";

const ListeBDCards = () => {
  const [imgIndices, setImgIndices] = useState({
    coeurVegan: 0,
    cochons: 0,
    cretinus: 0,
    findevie: 0,
    animauxlovers: 0,
  });

  const renderStars = () => (
    <h3>
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
    </h3>
  );

  // ATTENTION : CLASSES CSS
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

  const imgCretinusList = ["imgHomoCretinusA", "imgHomoCretinusB"];

  const imgAnimauxLoversList = ["imgAnimauxLoversA", "imgAnimauxLoversB"];

  const imgFinDeVieList = ["imgFinDeVieA", "imgFinDeVieB"];

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
    <div className={imgList[imgIndices[category]]}></div>
  );

  return (
    <div className="listeBDCards">
      <div className="entete">
        <div className="entetetextes"></div>
      </div>
      {renderStars()}
      {/* BD Reduire POA 009 */}
      <div className="BDCard">
        <div className="imgReduirePoa"></div>
      </div>
      {renderStars()}
      {/* BD Animaux Lovers 008 */}
      <div className="BDCard">
        {renderImage(imgAnimauxLoversList, "animauxlovers")}
      </div>
      <div className="BDCardMultiple">
        <div className="buttonprev">
          {renderButton(
            imgIndices["animauxlovers"] > 0,
            () => handlePrevClick("animauxlovers", imgAnimauxLoversList.length),
            "fa-solid fa-square-caret-left"
          )}
        </div>
        <div className="buttonnext">
          {renderButton(
            imgIndices["animauxlovers"] < imgAnimauxLoversList.length - 1,
            () => handleNextClick("animauxlovers", imgAnimauxLoversList.length),
            "fa-solid fa-square-caret-right"
          )}
        </div>
      </div>
      {renderStars()}
      {/* BD Fin de Vie 007 */}
      <div className="BDCard">{renderImage(imgFinDeVieList, "findevie")}</div>
      <div className="BDCardMultiple">
        <div className="buttonprev">
          {renderButton(
            imgIndices["findevie"] > 0,
            () => handlePrevClick("findevie", imgFinDeVieList.length),
            "fa-solid fa-square-caret-left"
          )}
        </div>
        <div className="buttonnext">
          {renderButton(
            imgIndices["findevie"] < imgFinDeVieList.length - 1,
            () => handleNextClick("findevie", imgFinDeVieList.length),
            "fa-solid fa-square-caret-right"
          )}
        </div>
      </div>
      {renderStars()}
      {/* BD Réincarnation 006 */}
      <div className="BDCard">
        <div className="imgReincarnation"></div>
      </div>
      {renderStars()}
      {/* BD Homo Cretinus Barbarus 005 */}
      <div className="BDCard">{renderImage(imgCretinusList, "cretinus")}</div>
      <div className="BDCardMultiple">
        <div className="buttonprev">
          {renderButton(
            imgIndices["cretinus"] > 0,
            () => handlePrevClick("cretinus", imgCretinusList.length),
            "fa-solid fa-square-caret-left"
          )}
        </div>
        <div className="buttonnext">
          {renderButton(
            imgIndices["cretinus"] < imgCretinusList.length - 1,
            () => handleNextClick("cretinus", imgCretinusList.length),
            "fa-solid fa-square-caret-right"
          )}
        </div>
      </div>
      {renderStars()}
      {/* BD Petits Cochons 004 */}
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
      {/* BD Coeur Vegan 003 */}
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
      {/* BD Omnivore par choix 002 */}
      <div className="BDCard">
        <div className="imgOmnivoreChoix"></div>
      </div>
      {renderStars()}
      {/* BD vache 001 */}
      <div className="BDCard">
        <div className="imgVache"></div>
      </div>
    </div>
  );
};

export default ListeBDCards;
