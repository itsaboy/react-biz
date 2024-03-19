import { useEffect, useContext } from "react";
import Hero from "../components/Hero";
import Tech from "../components/Tech";
import AIPictures from "../components/AIPictures";
import { NavContext } from "../context/NavContext";

export default function About() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("About");
  });

  return (
    <div className="bg-gray-900">
      <div className="isolate">
        <Hero />
        <Tech />
        <AIPictures />
      </div>
    </div>
  );
}
