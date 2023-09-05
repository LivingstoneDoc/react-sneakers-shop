import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {

  const [isOpenCart, setIsOpenCart] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://64f4ab91932537f4051a96b6.mockapi.io/items")
    .then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json);
    });
  }, []);

  return (
    <div className="wrapper">
      {isOpenCart && <Cart onClose={() => setIsOpenCart(false)} />}
      <Header onClickCart={() => setIsOpenCart(true)} />
      <main className="mainContent">
        <div className="mainContentTitleWrapper">
          <h2 className="allSneakersSubtitle">Все кроссовки</h2>
          <div className="searchWrapper">
            <img src="./icon/main-content/search.svg" alt="Search" className="searchImg" />
            <input type="text" placeholder="Поиск..." className="searchSneakers" />
          </div>
        </div>
        <div className="contentWrapper">
          {items.map(itemArr => (
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