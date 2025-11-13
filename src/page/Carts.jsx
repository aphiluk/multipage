import { useState, useEffect } from "react";
import "./carts.css";

export default function Carts() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    const total = savedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, []);

  const deleteFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    const total = newCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h3>Carts Page 🛒</h3>
        <span>Products: {cartItems.length} items</span>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">No items in cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <div
                  className="cart-image"
                  style={{ backgroundColor: item.color || "#4ade80" }} // ✅ ใช้สีที่เก็บไว้
                ></div>
                <div className="cart-info">
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-price">${item.price.toFixed(2)}</p>
                  <button
                    className="btn delete"
                    onClick={() => deleteFromCart(item.id)}
                  >
                    Delete from Carts
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-info">
              <p>
                <strong>Products:</strong> {cartItems.length} items
              </p>
              <p>
                <strong>Total price:</strong>{" "}
                <span className="total-price">${totalPrice.toFixed(2)}</span>
              </p>
            </div>

            <div className="checkout-wrapper">
              <button className="btn checkout">Checkout 💳</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
