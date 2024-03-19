import {
  HomeIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  {
    name: "Home",
    to: "/",
    icon: <HomeIcon className=" h-6 w-auto text-blue-200" />,
  },
  {
    name: "About",
    to: "/about",
    icon: <InformationCircleIcon className=" h-6 w-auto text-blue-200" />,
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <WrenchScrewdriverIcon className=" h-6 w-auto text-blue-200" />,
  },
  {
    name: "Pricing",
    to: "/pricing",
    icon: <BanknotesIcon className=" h-6 w-auto text-blue-200" />,
  },
  {
    name: "Contact",
    to: "/contact",
    icon: <EnvelopeIcon className=" h-6 w-auto text-blue-200" />,
  },
];
