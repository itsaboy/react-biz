import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";
import HTMLSnippet from "../components/HTMLSnippet";
import ReactSnippet from "../components/ReactSnippet";
import styles from "../bubble.module.css";

export default function Home() {
  const [code, setCode] = useState("html");

  const handleClick = (code) => {
    setCode(code);
  };

  return (
    <div className="bg-gray-950">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <img
                  className="h-11"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-200">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
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
                  uniquely crafted website that speaks directly to your
                  audience.
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
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-gray-800 shadow-xl shadow-gray-200/20 ring-1 ring-blue-600 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg shadow-gray-400/20 md:rounded-3xl">
              <div className="bg-blue-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-200 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/60 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <button
                            className={
                              code === "html"
                                ? `border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-gray-200`
                                : `border-r border-gray-600/10 px-4 py-2`
                            }
                            onClick={() => handleClick("html")}
                          >
                            index.html
                          </button>
                          <button
                            className={
                              code === "react"
                                ? `border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-gray-200`
                                : `border-r border-gray-600/10 px-4 py-2`
                            }
                            onClick={() => handleClick("react")}
                          >
                            App.jsx
                          </button>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6 text-blue-200/80">
                        {code === "html" && <HTMLSnippet />}
                        {code === "react" && <ReactSnippet />}
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-gray-900" />
      </div>
    </div>
  );
}
