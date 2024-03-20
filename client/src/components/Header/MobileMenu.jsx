import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MobileNavButton from "./MobileNavButton.jsx";
import logo from "../../assets/icons/logo.svg";

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
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
              className="h-10 w-auto border-2 rounded-full border-blue-400"
              src={logo}
              alt="Zach of All Trades"
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
              <MobileNavButton setMobileMenuOpen={setMobileMenuOpen} />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
