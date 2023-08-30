function Card(props) {
console.log(props);

    return (
        <div className="contentItem">
            <div className="notFavouriteImg">
              <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
            </div>
            <img src={props.imgUrl} alt="sneakers img" className="sneakersImg" />
            <p className="contentItemDescr">{props.title}</p>
            <div className="contentItemBottom">
              <div className="price">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">{props.price} руб.</p>
              </div>
              <img src="./icon/main-content/cart-not-add.svg" alt="add cart" onClick={props.onClick}/>
            </div>
          </div>
    );
}
export default Card;