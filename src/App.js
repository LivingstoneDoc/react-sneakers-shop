import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {
  const sneakersCardsArr = [
    {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imgUrl: "./img/sneakers/sneakers1.png"},
    {title: "Мужские Кроссовки Nike Air Max 270", price: 9999, imgUrl: "./img/sneakers/sneakers2.png"},
    {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imgUrl: "./img/sneakers/sneakers3.png"},
    {title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imgUrl: "./img/sneakers/sneakers4.png"}
  ]
  return (
    <div className="wrapper">
      <Cart />
      <Header />
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
                title={itemArr.title}
                price={itemArr.price}
                imgUrl={itemArr.imgUrl}
              />
            ))}
        </div>

      </main>
    </div>
  );
}

export default App;