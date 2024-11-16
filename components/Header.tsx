"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative bg-white w-full p-4 md:p-7">
      {/* Navigation Menu */}
      <Navbar>
        <div className="flex justify-end">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-[#e04040] focus:outline-none"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute z-20 bg-white border-t-2 border-[#e04040] md:top-[3.5rem] md:left-[33rem] p-3 shadow-xl w-full md:w-auto">
            <form
              method="get"
              action="https://www.iquanta.in/blog/"
              className="flex flex-col md:flex-row items-center"
            >
              <input
                type="text"
                autoComplete="off"
                className="border border-gray-300 py-2 px-3 w-full md:w-auto focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 text-sm mt-2 md:mt-0 md:ml-2 hover:bg-[#e04040] focus:outline-none"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
