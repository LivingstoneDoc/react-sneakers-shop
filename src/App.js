function App() {
  return (
    <div className="wrapper">
      <div className="cartOverlay">
        <div className="cart">
          <h2 className="cartSubtitle">Корзина</h2>
          <div className="cartContentWrapper">
            <div className="cartItem">
              {/*TODO: change image size, position on the page*/}
              <img src="./img/sneakers/sneakers2.png" alt="Sneakers" className="cartItemImg" />
              <div className="cartItemDescr">
                <p className="cartItemName">Мужские Кроссовки Nike Air Max 270</p>
                <p className="cartItemPrice">12 999 руб.</p>
              </div>
              <img src="./icon/cart/cart-remove-item-hover.svg" alt="delete" className="cartRemoveImg" />
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="headerLeft">
          <img src="./icon/header/logo.svg" alt="logo" className="logo" />
          <div className="headerInfo">
            <h1>React sneakers</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="headerRight">
          <div className="cart-wrapper">
            <img src="./icon/header/cart.svg" alt="cart" className="cart" />
            <p>1205 руб.</p>
          </div>
          <img src="./icon/header/favourites.svg" alt="favourites" className="favourites" />
          <img src="./icon/header/profile.svg" alt="profile" className="profile" />
        </div>
      </header>

      <main className="mainContent">
        <div className="mainContentTitleWrapper">
          <h2 className="allSneakersSubtitle">Все кроссовки</h2>
          <div className="searchWrapper">
            <img src="./icon/main-content/search.svg" alt="Search" className="searchImg" />
            <input type="text" placeholder="Поиск..." className="searchSneakers" />
          </div>
        </div>
        <div className="contentWrapper">
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

          <div className="contentItem">
            <div className="notFavouriteImg">
              <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
            </div>
            <img src="./img/sneakers/sneakers2.png" alt="sneakers img" className="sneakersImg" />
            <p className="contentItemDescr">Мужские Кроссовки Nike Air Max 270</p>
            <div className="contentItemBottom">
              <div className="price">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">12 999 руб.</p>
              </div>
              <img src="./icon/main-content/cart-not-add.svg" alt="add cart" />
            </div>
          </div>

          <div className="contentItem">
            <div className="notFavouriteImg">
              <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
            </div>
            <img src="./img/sneakers/sneakers3.png" alt="sneakers img" className="sneakersImg" />
            <p className="contentItemDescr">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="contentItemBottom">
              <div className="price">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">12 999 руб.</p>
              </div>
              <img src="./icon/main-content/cart-not-add.svg" alt="add cart" />
            </div>
          </div>

          <div className="contentItem">
            <div className="notFavouriteImg">
              <img src="./icon/main-content/favourites-inactive.svg" alt="Not favourite" />
            </div>
            <img src="./img/sneakers/sneakers4.png" alt="sneakers img" className="sneakersImg" />
            <p className="contentItemDescr">Кроссовки Puma X Aka Boku Future Rider</p>
            <div className="contentItemBottom">
              <div className="price">
                <p className="priceTitle">Цена:</p>
                <p className="priceValue">12 999 руб.</p>
              </div>
              <img src="./icon/main-content/cart-not-add.svg" alt="add cart" />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;