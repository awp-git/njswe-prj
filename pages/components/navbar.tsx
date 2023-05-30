import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="select-none">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-4 md:py-6 pb-8 md:pb-14 font-sans">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="text-sky-300 text-lg md:text-2xl duration-300 ease-in-out font-semibold"
          >
            Food Insecurity
          </Link>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-base md:text-xl text-white font-semibold">
            <li>
              <Link
                href="/causes"
                className="hover:text-sky-300 duration-300 ease-in-out hover:text-lg md:hover:text-xl"
              >
                Causes
              </Link>
            </li>
            <li>
              <Link
                href="/impact"
                className="hover:text-sky-300 duration-300 ease-in-out hover:text-lg md:hover:text-xl"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="hover:text-sky-300 duration-300 ease-in-out hover:text-lg md:hover:text-xl"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="hover:text-sky-300 duration-300 ease-in-out hover:text-lg md:hover:text-xl"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
