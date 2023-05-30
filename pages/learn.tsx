import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const learnItems = [
  {
    title: "Causes of Food Insecurity",
    description:
      "Learn about the root causes of food insecurity, including poverty, climate change, and conflict.",
    link: "/causes",
  },
  {
    title: "Impact of Food Insecurity",
    description:
      "Understand the devastating effects of food insecurity on individuals, communities, and economies.",
    link: "/impact",
  },
  {
    title: "Solutions to Food Insecurity",
    description:
      "Discover possible solutions to combat food insecurity, such as increasing access to education, improving agricultural practices, and supporting food banks.",
    link: "/solutions",
  },
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-600 to-stone-900 text-white p-10 font-sans">
      <Navbar />

      <div className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-80 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-300">
            Learn, Understand, Act
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <Link href="/causes" className="text-white hover:text-gray-300">
              Learn
            </Link>
            {", "}
            <Link href="/impact" className="text-white hover:text-gray-300">
              Understand
            </Link>
            {", "}
            <Link href="/solutions" className="text-white hover:text-gray-300">
              Act
            </Link>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore the causes, impact, and solutions of food insecurity to
            better understand this complex issue and take action to combat it.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {learnItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-800 rounded-xl p-6"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  {item.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p className="flex-auto">{item.description}</p>
                  <Link
                    href={item.link}
                    className="text-sm font-semibold leading-6 text-sky-300 select-none mt-6 hover:text-sky-100"
                  >
                    Learn more →
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Footer />
    </div>
  );
}
