import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./page/Home";
import Calculator from "./page/Calculator";
import Animation from "./page/Animation";
import ComponentPage from "./page/Components";
import Todos from "./page/Todos";
import Products from "./page/Products";
import Carts from "./page/Carts";
import Login from "./page/login/Login";

export default function App() {
  const [token, setToken] = useState("");

  if (token === "") {
    return <Login setToken={setToken} />;
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout token={token} setToken={setToken} />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="animation" element={<Animation />} />
        <Route path="component" element={<ComponentPage />} />
        <Route path="todos" element={<Todos />} />
        <Route path="carts" element={<Carts />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}
