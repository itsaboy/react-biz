import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavContext } from "../../context/NavContext.js";
import { NAVIGATION } from "../../data/NAVIGATION.jsx";
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
        {NAVIGATION.map((link) => (
          <Link key={link.name} to={link.to}>
            <button className="px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-blue-400/80 hover:shadow-md hover:shadow-blue-400/60 flex items-center">
              <span className="relative z-10 pr-2">{link.icon}</span>
              <span
                className={
                  currentPage === link.name
                    ? `text-gray-950 relative z-10`
                    : `text-gray-200 relative z-10`
                }
              >
                {link.name}
              </span>
              <motion.div
                initial={{ left: 0 }}
                animate={{ left: "-300%" }}
                transition={{
                  repeat: 12,
                  repeatType: "mirror",
                  duration: 4,
                  ease: "linear",
                }}
                className={
                  currentPage === link.name
                    ? `bg-[linear-gradient(to_right,#3b82f6,#60a5fa,#93c5fd,#bfdbfe,#dbeafe)] absolute z-0 inset-0 w-[400%] `
                    : `bg-[linear-gradient(to_right,#4f46e5,#1d4ed8,#1e40af,#1e3a8a,#172554)] absolute z-0 inset-0 w-[400%] `
                }
              ></motion.div>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
