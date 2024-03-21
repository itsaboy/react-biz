import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="relative isolate mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-48 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <p className="text-4xl font-semibold leading-8 text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-200">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-10">
        <Link to="/" className="text-sm font-semibold leading-7 text-blue-400">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  );
}
