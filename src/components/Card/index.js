import { useState } from "react";
import "./Card.css";

function Card(props) {

  const [isAdd, setIsAdd] = useState(false);

  const onClickPlus = () => {
    setIsAdd(!isAdd);
  }

  return (
    <div className="contentItem">
      <div className="notFavouriteImg" onClick={props.onClickFavouriteBtn}>
        <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
      </div>
      <img src={props.imgUrl} alt="sneakers img" className="sneakersImg" />
      <p className="contentItemDescr">{props.title}</p>
      <div className="contentItemBottom">
        <div className="price">
          <p className="priceTitle">Цена:</p>
          <p className="priceValue">{props.price} руб.</p>
        </div>
        <img src={isAdd ? "./icon/main-content/cart-add.svg" : "./icon/main-content/cart-not-add.svg"} alt="add cart" onClick={onClickPlus} />
      </div>
    </div>
  );
}
export default Card;