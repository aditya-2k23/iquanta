import React from "react";
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
    <li className="menu-item">
      <a href={link} className="flex items-center">
        {title}&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#878787"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
          strokeWidth="2"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            fill="#878787"
          />
        </svg>
      </a>
      <ul className="submenu">
        {subMenuArr.map((subMenu) => (
          <li key={subMenu} className="p-2">
            <a className="subMenu-links" href={subMenu}>
              {subMenu}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center p-3">
      {/* Logo Section */}
      <div className="logo-container">
        <a href="https://www.iquanta.in/blog/">
          <Image
            src="/black_logo-1.webp"
            alt="Logo"
            width={170}
            height={172}
            className="mr-10"
          />
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="menu-container">
        <ul className="list-none flex gap-10">
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
      </nav>
    </div>
  );
};

export default Navbar;
