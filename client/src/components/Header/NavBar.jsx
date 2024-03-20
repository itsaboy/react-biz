import { useContext } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavButton from "./NavButton.jsx";
import { NavContext } from "../../context/NavContext.js";
import styles from "../../bubble.module.css";
import logo from "../../assets/icons/logo.svg";

export default function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
  const { currentPage } = useContext(NavContext);

  return (
    <nav
      className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="-m-1.5 p-1.5">
        <span className="sr-only">Zach of All Trades</span>
        {currentPage === "Home" || mobileMenuOpen ? (
          <h2 className="text-2xl font-base tracking-tight text-gray-300/80 hover:cursor-default">
            {"Zach of All Trades".split("").map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))}
          </h2>
        ) : (
          <img
            src={logo}
            className="h-10 border-2 rounded-full border-blue-400"
          />
        )}
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-200"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <NavButton />
      </div>
    </nav>
  );
}
