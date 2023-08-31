import "./Cart.css";

function Cart() {
    return (
        <div style={{ display: "none" }} className="cartOverlay">
        <div className="cart">
          <div className="cartTitleWrapper">
            <h2 className="cartSubtitle">Корзина</h2>
            <img src="./icon/cart/cart-remove-item-hover.svg" alt="delete" className="cartRemoveImg" />
          </div>
          {/* <div className="cartContentWrapper"> */}

          <div className="cartItemsWrapper">
            <div className="cartItem">
              <div style={{ backgroundImage: 'url(./img/sneakers/sneakers2.png)' }} className="cartItemImg"></div>
              <div className="cartItemDescr">
                <p className="cartItemName">Мужские Кроссовки Nike Air Max 270</p>
                <p className="cartItemPrice">12 999 руб.</p>
              </div>
              <img src="./icon/cart/cart-remove-item-hover.svg" alt="delete" className="cartRemoveImg" />
            </div>

            <div className="cartItem">
              <div style={{ backgroundImage: 'url(./img/sneakers/sneakers4.png)' }} className="cartItemImg"></div>
              <div className="cartItemDescr">
                <p className="cartItemName">Кроссовки Puma X Aka Boku Future Rider</p>
                <p className="cartItemPrice">8 999 руб.</p>
              </div>
              <img src="./icon/cart/cart-remove-item-hover.svg" alt="delete" className="cartRemoveImg" />
            </div>
          </div>

          <div className="cartBottomContentWrapper">
            <div className="cartFinalPrice">
              <p className="total">Итого:</p>
              <div className="dashLine"></div>
              <p className="totalPrice">21 498руб.</p>
            </div>
            <div className="cartTax">
              <p className="cartTaxTitle">Налог 5%:</p>
              <div className="dashLine"></div>
              <p className="cartTaxAmount">1074 руб.</p>
            </div>
            <button className="greenBtn">Оформить заказ
              <img src="./icon/cart/cart-button-arrow.svg" alt="Arrow" className="cartBtnImg" />
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
}

export default Cart;