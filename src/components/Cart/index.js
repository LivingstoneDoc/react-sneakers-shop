import "./Cart.css";

function Cart({onClose, items}) {
    return (
        <div className="cartOverlay" onClick={onClose}>
        <div className="cart" onClick={(e) => e.stopPropagation(e)}>
          <div className="cartTitleWrapper">
            <h2 className="cartSubtitle">Корзина</h2>
            <img onClick={onClose} src="./icon/cart/cart-remove-item-hover.svg" alt="Close" className="cartRemoveImg" />
          </div>
          {/* <div className="cartContentWrapper"> */}

          <div className="cartItemsWrapper">
            {items.map((itemsArr, i) => (
              <div className="cartItem" key={i}>
              <div style={{ backgroundImage: `url(${itemsArr.imgUrl})` }} className="cartItemImg"></div>
              <div className="cartItemDescr" key={i}>
                <p className="cartItemName">{itemsArr.title}</p>
                <p className="cartItemPrice">{itemsArr.price} руб.</p>
              </div>
              <img src="./icon/cart/cart-remove-item-hover.svg" alt="Delete" className="cartRemoveImg" />
            </div>
            ))}
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