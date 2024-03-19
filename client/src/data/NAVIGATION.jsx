import {
  HomeIcon,
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  {
    name: "Home",
    to: "/",
    icon: <HomeIcon className=" h-6 w-auto text-gray-950" />,
  },
  {
    name: "About",
    to: "/about",
    icon: <QuestionMarkCircleIcon className=" h-6 w-auto text-gray-950" />,
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <WrenchScrewdriverIcon className=" h-6 w-auto text-gray-950" />,
  },
  {
    name: "Pricing",
    to: "/pricing",
    icon: <BanknotesIcon className=" h-6 w-auto text-gray-950" />,
  },
  {
    name: "Contact",
    to: "/contact",
    icon: <EnvelopeIcon className=" h-6 w-auto text-gray-950" />,
  },
];
