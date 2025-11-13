import { useState, useEffect } from "react";
import "./products.css";

// Mock data 8 สินค้า
const mockProducts = [
  { id: 1, title: "Wireless Headphones", price: 59.99 },
  { id: 2, title: "Smart Watch", price: 129.99 },
  { id: 3, title: "Running Shoes", price: 89.99 },
  { id: 4, title: "Leather Wallet", price: 39.99 },
  { id: 5, title: "Coffee Maker", price: 79.99 },
  { id: 6, title: "Desk Lamp", price: 29.99 },
  { id: 7, title: "Backpack", price: 49.99 },
  { id: 8, title: "Bluetooth Speaker", price: 69.99 },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = [
    "#4ade80", "#a855f7", "#ec4899", "#3b82f6",
    "#facc15", "#f97316", "#14b8a6", "#8b5cf6"
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    setTimeout(() => { 
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const addToCart = (product, color) => {
    const newCart = [...cart];
    if (!newCart.find((item) => item.id === product.id)) {
      const productWithColor = { ...product, color };
      newCart.push(productWithColor);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Products ({products.length})</h2>
        <span>🛒 {cart.length} in cart</span>
      </div>

      <div className="product-list">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="product-card skeleton">
                <div className="product-image"></div>
                <div className="product-info">
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-line long"></div>
                  <div className="skeleton-button"></div>
                </div>
              </div>
            ))
          : products.map((product, index) => {
              const bgColor = colors[index % colors.length];
              const inCart = cart.find((item) => item.id === product.id);
              return (
                <div key={product.id} className="product-card">
                  <div
                    className="product-image"
                    style={{ backgroundColor: bgColor }}
                  ></div>
                  <div className="product-info">
                    <p className="product-title">{product.title}</p>
                    <p className="product-price">${product.price}</p>
                    <button
                      type="button"
                      onClick={() => addToCart(product, bgColor)}
                      className={inCart ? "btn added" : "btn add"}
                    >
                      {inCart ? "Added to carts" : "Add to carts"}
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
