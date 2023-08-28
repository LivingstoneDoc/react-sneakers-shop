import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {
  const sneakersItemCardsArr = [
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999},
    {name: "Мужские Кроссовки Nike Air Max 270", price: 9999}
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
          {sneakersItemCardsArr.map(arrItem => <Card />)}
        </div>

      </main>
    </div>
  );
}

export default App;






const sneakersCardsArr = [
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999},
  {name: "Мужские Кроссовки Nike Air Max 270", price: 9999}
]