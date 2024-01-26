import React from "react";

const ListeRecettesCards = () => {
  // const [imgIndices, setImgIndices] = useState({
  //   coeurVegan: 0,
  //   cochons: 0,
  // });

  const renderStars = () => (
    <h3>
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
    </h3>
  );

  // const handlePrevClick = (category, listLength) => {
  //   setImgIndices({
  //     ...imgIndices,
  //     [category]: (imgIndices[category] - 1 + listLength) % listLength,
  //   });
  // };

  // const handleNextClick = (category, listLength) => {
  //   setImgIndices({
  //     ...imgIndices,
  //     [category]: (imgIndices[category] + 1) % listLength,
  //   });
  // };

  // const renderButton = (condition, handleClick, iconClass) =>
  //   condition && (
  //     <button onClick={handleClick}>
  //       <i className={iconClass}></i>
  //     </button>
  //   );

  // const renderImage = (imgList, category) => (
  //   <div className="BDCard">
  //     <div className={imgList[imgIndices[category]]}></div>
  //   </div>
  // );

  return (
    <div className="listeRecettesCards">
      {/* <div className="BDCardMultiple">
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
      {renderStars()} */}

      <div className="RecetteCard">
        <div className="r01cookies"></div>
      </div>
      {renderStars()}
    </div>
  );
};

export default ListeRecettesCards;
