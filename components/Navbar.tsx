import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-1 mb-8 px-3 rounded-b-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xs md:text-xl">
          Anime Avenue
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="./"
              className="text-white text-xs md:text-base hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="./"
              className="text-white text-xs md:text-base hover:text-gray-300"
            >
              Anime
            </Link>
          </li>
          <li>
            <Link
              href="/manga"
              className="text-white text-xs md:text-base hover:text-gray-300"
            >
              Manga
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white text-xs md:text-base hover:text-gray-300"
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href="./contact"
              className="text-white text-xs md:text-base hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
