import Link from "next/link";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-10 font-sans">
      <Navbar />

      <div className="relative isolate flex flex-col items-center justify-center h-screen pt-80 pb-96 mb-40 lg:px-8 sm:pt-4 sm:pb-48">
        <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Food Insecurity: A Global Crisis
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join us in the fight against food insecurity. Learn about the
            causes, effects, and solutions to this complex issue affecting
            millions worldwide.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/learn"
              className="text-sm font-semibold leading-6 text-sky-300 select-none"
            >
              Check it out <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
