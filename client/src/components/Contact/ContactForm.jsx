import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-blue-300"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-blue-300"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-blue-300"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-blue-300"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-blue-300"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className={`
                      relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                      border-blue-300 px-4 py-2 font-semibold
                      uppercase text-blue-300 transition-all duration-500
                      
                      before:absolute before:inset-0
                      before:-z-10 before:translate-x-[150%]
                      before:translate-y-[150%] before:scale-[2.5]
                      before:rounded-[100%] before:bg-blue-300
                      before:transition-transform before:duration-1000
                      before:content-[""]

                      hover:scale-105 hover:text-neutral-900
                      hover:before:translate-x-[0%]
                      hover:before:translate-y-[0%]
                      active:scale-95`}
            type="submit"
          >
            <span>Send message</span>
            <EnvelopeOpenIcon className="h-6 w-auto" />
          </button>
        </div>
      </div>
    </form>
  );
}
