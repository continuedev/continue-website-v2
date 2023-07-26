import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src="/images/cd.svg"
                width="48"
                height="48"
                alt="Continue Dev"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="https://www.blog.continue.dev/its-time-to-collect-data-on-how-you-build-software/"
                  target="_blank"
                  className="font-medium text-white hover:text-gray-300 hover:border-zinc-400 px-5 py-2 ml-8 flex items-center transition duration-300 ease-in-out border-[2px] border-zinc-300 rounded-lg"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
