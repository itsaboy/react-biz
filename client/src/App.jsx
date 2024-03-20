import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import { NavContext } from "./context/NavContext.js";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />,
      <Route index path="/about" element={<About />} />,
      <Route index path="/projects" element={<Projects />} />,
      <Route index path="/contact" element={<Contact />} />,
      <Route index path="/pricing" element={<Pricing />} />,
    </Route>
  )
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentPlan, setCurrentPlan] = useState(null);

  return (
    <NavContext.Provider
      value={{ currentPage, setCurrentPage, currentPlan, setCurrentPlan }}
    >
      <RouterProvider router={router} />
    </NavContext.Provider>
  );
}
