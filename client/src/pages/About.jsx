import { useEffect, useContext } from "react";
import HeroSection from "../components/About/HeroSection";
import TechSection from "../components/About/TechSection";
import AISection from "../components/About/AISection";
import { NavContext } from "../context/NavContext";

export default function About() {
  const { setCurrentPage, setCurrentPlan } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("About");
    setCurrentPlan(null);
  }, [setCurrentPage, setCurrentPlan]);

  return (
    <div className="bg-gray-900">
      <div className="isolate">
        <HeroSection />
        <TechSection />
        <AISection />
      </div>
    </div>
  );
}
