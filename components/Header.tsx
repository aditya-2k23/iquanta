"use client";

import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative bg-white w-full p-7">
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
          <>
            <div className=""></div>
            <div className="absolute z-20 bg-white border-t-2 border-[#e04040] p-3 shadow-xl">
              <form
                method="get"
                action="https://www.iquanta.in/blog/"
                className="flex items-center"
              >
                <input
                  type="text"
                  autoComplete="off"
                  className="border border-gray-300 py-2 px-3 h-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 text-sm hover:bg-[#e04040] focus:outline-none"
                >
                  Search
                </button>
              </form>
            </div>
          </>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
