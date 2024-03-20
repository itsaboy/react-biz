import { Link } from "react-router-dom";
import { CheckIcon, CreditCardIcon } from "@heroicons/react/20/solid";
import { PRICING } from "../../data/PRICING.js";

export default function PricingPlanCards() {
  return (
    <>
      {PRICING.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 sm:p-10  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
        >
          <div>
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-blue-300"
            >
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-200">
                {tier.priceHourly}
              </span>
              <span className="text-base font-semibold leading-7 text-gray-300">
                /hour
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-400">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-4 space-y-4 text-sm leading-6 text-gray-300"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-blue-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={tier.href}
            aria-describedby={tier.id}
            className="grid place-items-center justify-center mt-10"
          >
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
              <span>Get started today</span>
              <CreditCardIcon className="h-6 w-auto" />
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}
