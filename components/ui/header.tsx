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
            <ul className="flex grow justify-start flex-wrap items-center md:gap-x-3">
              <li>
                <Link
                  href="https://blog.continue.dev"
                  target="_blank"
                  className="font-medium text-white hover:text-gray-300 hover:border-zinc-400 py-1 ml-4 flex items-center transition duration-300 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://continue.dev/docs"
                  target="_blank"
                  className="font-medium text-white hover:text-gray-300 hover:border-zinc-400 py-1 ml-4 flex items-center transition duration-300 ease-in-out"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/vapESyrFmJ"
                  target="_blank"
                  className="font-medium text-white hover:text-gray-300 hover:border-zinc-400 py-1 ml-4 flex items-center transition duration-300 ease-in-out"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/continuedev/continue"
                  target="_blank"
                  className="font-medium text-white hover:text-gray-300 hover:border-zinc-400 py-1 ml-4 flex items-center transition duration-300 ease-in-out"
                >
                  GitHub
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
