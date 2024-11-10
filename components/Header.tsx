"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative w-full p-4">
      {/* Mobile Search Button */}
      <div className="flex justify-end md:hidden">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Navigation Menu */}
      <Navbar />

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="p-6 rounded-lg shadow-lg max-w-sm w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖️
            </button>

            {/* Search Form */}
            <form
              method="get"
              action="https://www.iquanta.in/blog/"
              className="flex flex-col"
            >
              <label htmlFor="search" className="text-lg font-semibold mb-2">
                Search
              </label>
              <input
                id="search"
                type="text"
                name="s"
                autoComplete="off"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
