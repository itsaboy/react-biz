import Hero from "../components/Hero";
import Tech from "../components/Tech";
import AIPictures from "../components/AIPictures";

export default function About() {
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
