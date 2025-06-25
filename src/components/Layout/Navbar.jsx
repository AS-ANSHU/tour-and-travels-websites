import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500/25 px-4 py-2 text-black shadow-md md:px-6 md:py-4">
      <div className="flex items-center space-x-3">
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-bold"
        >
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <span> Quick Cab</span>
        </Link>
      </div>
      <ul className="hidden space-x-6 text-lg md:hidden lg:flex">
        <li>
          <Link href="/" className="transition-colors hover:text-yellow-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cab" className="transition-colors hover:text-yellow-300">
            Cab
          </Link>
        </li>
        <li>
          <Link href="/" className="transition-colors hover:text-yellow-300">
            Tour Package
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="transition-colors hover:text-yellow-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-yellow-300"
          >
            About
          </Link>
        </li>
      </ul>
      <button>
        <Link
          href="/about"
          className="rounded-lg border bg-blue-500 p-3 transition-colors hover:text-yellow-300"
        >
          Booka a Ride
        </Link>
      </button>

      <div className="block md:block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div>
              <ul className="flex flex-col text-lg">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-yellow-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cab"
                    className="transition-colors hover:text-yellow-300"
                  >
                    Cab
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-yellow-300"
                  >
                    Tour Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-yellow-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-yellow-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
