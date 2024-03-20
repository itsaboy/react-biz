import { Link } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import styles from "../../bubble.module.css";
import logo from "../../assets/icons/logo.svg";

export default function HomeTextSection() {
  return (
    <div className="px-6 lg:px-0 lg:pt-4">
      <div className="mx-auto max-w-2xl">
        <div className="max-w-lg">
          <img
            className="h-16 drop-shadow-2xl border-4 rounded-full border-blue-400"
            src={logo}
            alt="Your Company"
          />
          <div className="mt-12" />
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
            {"Building digital experiences that resonate."
              .split("")
              .map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From concept to creation, your vision is the blueprint for a
            uniquely crafted website that speaks directly to your audience.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to="/pricing">
              <button
                className={`
                      relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                      border-blue-300 px-4 py-2 font-semibold
                      uppercase text-blue-300 transition-all duration-500
                      
                      before:absolute before:inset-0
                      before:-z-10 before:translate-x-[150%]
                      before:translate-y-[150%] before:scale-[2.5]
                      before:rounded-[100%] before:bg-blue-300
                      before:transition-transform before:duration-1000
                      before:content-[""]

                      hover:scale-105 hover:text-neutral-900
                      hover:before:translate-x-[0%]
                      hover:before:translate-y-[0%]
                      active:scale-95`}
              >
                <CurrencyDollarIcon className="h-6 w-auto" />
                <span>Pricing Plans</span>
              </button>
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-200"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
