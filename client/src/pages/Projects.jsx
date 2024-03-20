import { useEffect, useContext } from "react";
import ProjectSVG from "../components/Projects/ProjectSVG";
import ProjectCard from "../components/Projects/ProjectCard";
import { NavContext } from "../context/NavContext";
import styles from "../bubble.module.css";

export default function Projects() {
  const { setCurrentPage, setCurrentPlan } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Projects");
    setCurrentPlan(null);
  });

  return (
    <div className="relative isolate bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <ProjectSVG />
        <h2 className="mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
              {"Active Projects".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
