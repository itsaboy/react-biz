import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavContext } from "../../context/NavContext.js";
import { NAVIGATION } from "../../data/NAVIGATION.jsx";

export default function MobileNavButton({ setMobileMenuOpen }) {
  const { currentPage } = useContext(NavContext);

  return (
    <>
      {NAVIGATION.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
          onClick={() => setMobileMenuOpen(false)}
        >
          <button className="text-gray-200 font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-blue-400/80 hover:shadow-md hover:shadow-blue-400/60 w-full flex items-center">
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
                repeat: Infinity,
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
    </>
  );
}
