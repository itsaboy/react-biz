import { useEffect, useContext } from "react";
import HomeTextSection from "../components/Home/HomeTextSection";
import HomeCodeSection from "../components/Home/HomeCodeSection";
import { NavContext } from "../context/NavContext";

export default function Home() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Home");
  });

  return (
    <div className="bg-gray-950">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <HomeTextSection />
          <HomeCodeSection />
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-gray-900" />
      </div>
    </div>
  );
}
