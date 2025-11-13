import { Outlet } from "react-router-dom";
import AppHeader from "../assets/components/AppHeader";
import AppNavbar from "../assets/components/AppNavbar";
import AppFooter from "../assets/components/AppFooter";
import "../App.css";

export default function AppLayout({ token, setToken }) {
  return (
    <div className="layout-container">
      <AppHeader courseCode="01076020" courseName="Web Application Development" />

      <AppNavbar token={token} setToken={setToken} />

      <main className="app-outlet">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}
