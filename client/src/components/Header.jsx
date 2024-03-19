import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION } from "../data/NAVIGATION.jsx";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-950">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="-m-1.5 p-1.5">
          <span className="sr-only">Zach of All Trades</span>
          <h1>Zach of All Trades</h1>
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
              <button className="text-gray-200 font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-blue-400/80 hover:shadow-md hover:shadow-blue-400/60 flex items-center">
                <span className="relative z-10 pr-2">{link.icon}</span>
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  initial={{ left: 0 }}
                  animate={{ left: "-300%" }}
                  transition={{
                    repeat: 12,
                    repeatType: "mirror",
                    duration: 4,
                    ease: "linear",
                  }}
                  className="bg-[linear-gradient(to_right,#4f46e5,#1d4ed8,#1e40af,#1e3a8a,#172554)] absolute z-0 inset-0 w-[400%]"
                ></motion.div>
              </button>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-blue-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="text-gray-200 font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-blue-400/80 hover:shadow-md hover:shadow-blue-400/60 w-full flex items-center">
                      <span className="relative z-10 pr-2">{link.icon}</span>
                      <span className="relative z-10">{link.name}</span>
                      <motion.div
                        initial={{ left: 0 }}
                        animate={{ left: "-300%" }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 4,
                          ease: "linear",
                        }}
                        className="bg-[linear-gradient(to_right,#4f46e5,#1d4ed8,#1e40af,#1e3a8a,#172554)] absolute z-0 inset-0 w-[400%]"
                      ></motion.div>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
