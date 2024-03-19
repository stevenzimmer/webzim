import { navLists } from "@/lib/constants";
import Image from "next/image";
import { appleImg, bagImg, searchImg } from "utils";

export default function Navbar() {
  return (
    <header className="flex w-full justify-between px-5 py-5 sm:px-10">
      <nav className="container flex w-full items-center justify-between">
        <Image src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="">
          <ul className="flex ">
            {navLists.map((nav, i) => (
              <li
                className="cursor-pointer px-5 text-sm text-apple-grey transition-all duration-200 ease-in-out hover:text-white"
                key={i}
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <Image src={searchImg} alt="Search" width={18} height={18} />
          <Image
            className="ml-5"
            src={bagImg}
            alt="Bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
}
