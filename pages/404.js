import Link from "next/link";

export default function FourOhFour() {
  const email = "awpdevmain@gmail.com";

  return (
    <main class="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-red-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <p class="mt-6 text-base leading-7 text-gray-600">
          If you believe this is an error please email me at{" "}
          <a
            className="font-semibold text-indigo-600 hover:text-indigo-500"
            /* open email composer using mailto: protocol */
            href={`mailto:${email}`}
            /* new tab */
            target="_blank"
          >
            awpdevmain@gmail.com
          </a>
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            class="rounded-md bg-emerald-300 bg-opacity-50 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-opacity-100 hover:bg-emerald-500 ease-in-out duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
