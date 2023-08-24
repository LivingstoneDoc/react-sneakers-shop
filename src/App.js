function App() {
  return (
    <div className="wrapper">
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
    </div>
  );
}

export default App;