import React, { useState } from "react";
import Image from "next/image";

const NavItem = ({
  title,
  link,
  subMenuArr,
}: {
  title: string;
  link: string;
  subMenuArr: string[];
}) => {
  return (
    <li className="menu-item group">
      <a href={link} className="flex items-center">
        {title}&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
      {/* Submenu */}
      <ul className="submenu hidden group-hover:block bg-white shadow-lg absolute w-full rounded-md">
        {subMenuArr.map((subMenu) => (
          <li key={subMenu} className="p-1 pl-0 hover:bg-gray-100">
            <a className="subMenu-links" href={subMenu}>
              {subMenu}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center md:justify-start justify-between pl-5 pr-5 lg:pl-32 lg:pr-10">
      {/* Logo Section */}
      <div className="logo-container">
        <a href="https://www.iquanta.in/blog/">
          <Image
            src="/black_logo-1.webp"
            alt="Logo"
            width={150}
            height={170}
            className="mr-10"
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
            />
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex relative lg:gap-10 items-center bg-white p-5`}
      >
        <ul className="list-none flex flex-col lg:flex-row gap-5 lg:gap-10">
          <NavItem
            title="CAT & Non-CAT"
            link="https://www.iquanta.in/blog/"
            subMenuArr={[
              "CAT Exam",
              "MBA Specialization",
              "MBA Preparation Tips",
              "Bschools Information",
            ]}
          />

          <NavItem
            title="CUET & After 12th"
            link="https://www.iquanta.in/blog/category/after-12th/"
            subMenuArr={["CUET Exam", "IPMAT", "CLAT"]}
          />

          <NavItem
            title="GMAT & Study Abroad"
            link="https://www.iquanta.in/blog/category/gmat-study-abraod/"
            subMenuArr={["GMAT Exam", "IELTS Exam"]}
          />

          <NavItem
            title="Others"
            link="https://www.iquanta.in/blog/category/others/"
            subMenuArr={[
              "iQuanta's Features",
              "General Awareness",
              "Motivation",
              "Bank Exam",
              "UPSC Exam",
            ]}
          />
        </ul>

        {children}
      </nav>
    </div>
  );
};

export default Navbar;
