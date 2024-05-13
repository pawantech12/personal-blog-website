import React, { useEffect, useRef, useState } from "react";
import logo from "../images/arun-light-logo.svg";
import { Link } from "react-router-dom";
import ArchiveDropdown from "./ArchiveDropdown";
const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className=" px-24 py-4 max-sm:px-5 border-b border-zinc-100 items-center">
      <nav className="flex justify-between" ref={navRef}>
        <div className="logo">
          <img src={logo} width={130} alt="" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col gap-4 md:flex-row md:gap-6 items-center text-lg text-slate-800 max-md:text-neutral-800 font-normal max-md:absolute max-md:right-[15%] max-md:top-[13%] w-40 md:w-fit max-md:py-4 max-md:bg-white max-md:rounded-lg max-md:shadow-lg border border-slate-100`}
        >
          <li>
            <Link
              to="/"
              className="navLink text-slate-800 font-medium text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tags"
              className="navLink text-slate-800 font-medium text-base"
            >
              Tags
            </Link>
          </li>
          <li>
            <Link
              to="/authors"
              className="navLink text-slate-800 font-medium text-base"
            >
              Authors
            </Link>
          </li>
          <li>
            <ArchiveDropdown />
          </li>
          <li>
            <Link
              to="/contact"
              className="navLink text-slate-800 font-medium text-base"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
