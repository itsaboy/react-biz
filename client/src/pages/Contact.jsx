import { useEffect, useContext } from "react";
import ContactSVG from "../components/Contact/ContactSVG";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import { NavContext } from "../context/NavContext";

export default function Contact() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Contact");
  });

  return (
    <div className="relative isolate bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-900 ring-1 ring-gray-900/10 lg:w-1/2">
              <ContactSVG />
            </div>
            <ContactInfo />
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-gray-900" />
    </div>
  );
}
