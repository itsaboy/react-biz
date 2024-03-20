import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import InputOne from "../InputOne";
import InputTwo from "../InputTwo";
import SubmitButton from "../SubmitButton";

export default function ContactForm() {
  return (
    <form
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <InputOne
            htmlFor={"first-name"}
            label={"First Name"}
            type={"text"}
            name={"first-name"}
            id={"first-name"}
            autoComplete={"given-name"}
          />
          <InputOne
            htmlFor={"last-name"}
            label={"Last Name"}
            type={"text"}
            name={"last-name"}
            id={"last-name"}
            autoComplete={"family-name"}
          />
          <div className="sm:col-span-2">
            <InputOne
              htmlFor={"email"}
              label={"Email"}
              type={"email"}
              name={"email"}
              id={"email"}
              autoComplete={"email"}
            />
          </div>
          <div className="sm:col-span-2">
            <InputOne
              htmlFor={"phone-number"}
              label={"Phone Number"}
              type={"tel"}
              name={"phone-number"}
              id={"phone-number"}
              autoComplete={"tel"}
            />
          </div>
          <div className="sm:col-span-2">
            <InputTwo
              htmlFor={"message"}
              label={"Message"}
              name={"message"}
              id={"message"}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <SubmitButton
            text="Send Message"
            icon={<EnvelopeOpenIcon className="h-6 w-auto" />}
          />
        </div>
      </div>
    </form>
  );
}
