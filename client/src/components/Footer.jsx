import { FOOTERNAV } from "../data/FOOTERNAV.jsx";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {FOOTERNAV.map((icon) => (
            <a
              key={icon.name}
              href={icon.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{icon.name}</span>
              <icon.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2024 Zach of All Trades, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
