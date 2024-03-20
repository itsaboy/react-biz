import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import ButtonTwo from "../ButtonTwo.jsx";

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
        <ButtonTwo
          text={"Contact Info"}
          icon={<EnvelopeIcon className="h-6 w-auto" />}
        />
      </Link>
    </div>
  );
}
