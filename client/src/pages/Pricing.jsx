import { useEffect, useContext } from "react";
import PricingSVG from "../components/Pricing/PricingSVG.jsx";
import PricingGradient from "../components/Pricing/PricingGradient.jsx";
import PricingPlanCards from "../components/Pricing/PricingPlanCards.jsx";
import PricingCustom from "../components/Pricing/PricingCustom.jsx";
import { NavContext } from "../context/NavContext";
import styles from "../bubble.module.css";

export default function Pricing() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Pricing");
  });

  return (
    <div className="relative isolate overflow-hidden bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <PricingSVG />
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
            {"The right price for you.".split("").map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))}
          </h2>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-200">
            Choosing the right partner for your web development needs is a
            critical decision, and understanding the investment is a big part of
            that choice. This pricing structure is designed to be clear,
            competitive, and adaptable.
          </p>
          <PricingGradient />
        </div>
      </div>
      <div className="flow-root bg-gray-900 pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              <PricingPlanCards />
              <PricingCustom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
