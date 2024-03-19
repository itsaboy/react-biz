import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavContext } from "./context/NavContext.js";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="body-container">
      <NavContext.Provider value={{ currentPage, setCurrentPage }}>
        <Header />
        <main className="main-container">
          <Outlet />
        </main>
      </NavContext.Provider>
      <Footer />
    </div>
  );
}
