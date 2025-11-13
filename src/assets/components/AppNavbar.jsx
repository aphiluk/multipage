import { NavLink, useNavigate } from "react-router-dom";

export default function AppNavbar({ token, setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");       
    navigate("/");       
  };

  return (
    <nav className="app-navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/animation">Animation</NavLink>
      <NavLink to="/component">Component</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/carts">Carts</NavLink>

      {token ? (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}
