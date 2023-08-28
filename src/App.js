import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </main>
    </div>
  );
}

export default App;