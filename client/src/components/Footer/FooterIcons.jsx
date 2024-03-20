import { FOOTERNAV } from "../../data/FOOTERNAV.jsx";

export default function FooterIcons() {
  return (
    <>
      {FOOTERNAV.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">{icon.name}</span>
          <icon.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </>
  );
}
