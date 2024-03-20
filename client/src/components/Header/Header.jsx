import { useState, useContext } from "react";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu.jsx";
import { NavContext } from "../../context/NavContext.js";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentPage } = useContext(NavContext);

  return (
    <header className="bg-gray-950">
      <NavBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
