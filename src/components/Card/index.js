import { useState } from "react";
import "./Card.css";

function Card({title, price, imgUrl, onClickFavouriteBtn, onClickPlusBtn, onDeleteItemCart}) {

  const [isAdd, setIsAdd] = useState(false);

  const onClickPlus = () => {
    onClickPlusBtn({title, price, imgUrl});
    setIsAdd(!isAdd);
    // if (onDeleteItemCart) {
    //   setIsAdd(isAdd);
    // }
  }

  return (
    <div className="contentItem">
      <div className="notFavouriteImg" onClick={onClickFavouriteBtn}>
        <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
      </div>
      <img src={imgUrl} alt="sneakers img" className="sneakersImg" />
      <p className="contentItemDescr">{title}</p>
      <div className="contentItemBottom">
        <div className="price">
          <p className="priceTitle">Цена:</p>
          <p className="priceValue">{price} руб.</p>
        </div>
        <img src={isAdd ? "./icon/main-content/cart-add.svg" : "./icon/main-content/cart-not-add.svg"} alt="add cart" onClick={onClickPlus} />
      </div>
    </div>
  );
}
export default Card;