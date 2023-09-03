import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {

  const [isOpenCart, setIsOpenCart] = useState(false);

  const sneakersCardsArr = [
    {id: 1, title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imgUrl: "./img/sneakers/sneakers1.png"},
    {id: 2, title: "Мужские Кроссовки Nike Air Max 270", price: 9999, imgUrl: "./img/sneakers/sneakers2.png"},
    {id: 3, title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imgUrl: "./img/sneakers/sneakers3.png"},
    {id: 4, title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imgUrl: "./img/sneakers/sneakers4.png"}
  ]

  return (
    <div className="wrapper">
      {isOpenCart && <Cart onClose={() => setIsOpenCart(false)}/>}
      <Header onClickCart={() => setIsOpenCart(true)}/>
      <main className="mainContent">
        <div className="mainContentTitleWrapper">
          <h2 className="allSneakersSubtitle">Все кроссовки</h2>
          <div className="searchWrapper">
            <img src="./icon/main-content/search.svg" alt="Search" className="searchImg" />
            <input type="text" placeholder="Поиск..." className="searchSneakers" />
          </div>
        </div>
        <div className="contentWrapper">
            {sneakersCardsArr.map(itemArr => (
              <Card
                key={itemArr.id}
                title={itemArr.title}
                price={itemArr.price}
                imgUrl={itemArr.imgUrl}
                onClickPlusBtn={() => console.log("Plus click")}
                onClickFavouriteBtn={() => console.log("Favourite click")}
              />
            ))}
        </div>

      </main>
    </div>
  );
}

export default App;