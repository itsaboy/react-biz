import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function PricingCustom() {
  return (
    <div className="bg-gray-950 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center shadow-lg shadow-blue-400/40 ring-2 ring-gray-800">
      <div className="lg:min-w-0 lg:flex-1">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-blue-400">
          Custom
        </h3>
        <p className="mt-1 text-base leading-7 text-gray-300">
          Your vision is unique, and so should be your web solution. Let's
          create something exceptional together. Fill out the form to begin the
          journey toward realizing your bespoke web project.
        </p>
      </div>
      <Link to="/contact">
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
          <span className="text-left">Contact Info</span>
          <EnvelopeIcon className="h-6 w-auto" />
        </button>
      </Link>
    </div>
  );
}
