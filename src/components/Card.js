function Card() {
    return (
        <div className="contentItem">
            <div className="notFavouriteImg">
              <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
            </div>
            <img src="./img/sneakers/sneakers1.png" alt="sneakers img" className="sneakersImg" />
            <p className="contentItemDescr">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="contentItemBottom">
              <div className="price">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">12 999 руб.</p>
              </div>
              <img src="./icon/main-content/cart-not-add.svg" alt="add cart" />
            </div>
          </div>
    );
}

export default Card;