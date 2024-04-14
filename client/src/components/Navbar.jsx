import React from "react";
import logo from "../images/arun-light-logo.svg";
import { Link } from "react-router-dom";
import ArchiveDropdown from "./ArchiveDropdown";
const Navbar = () => {
  return (
    <header className="flex justify-between px-24 py-4 border-b border-zinc-100 items-center">
      <div className="logo">
        <img src={logo} width={130} alt="" />
      </div>

      <nav className="">
        <ul className="flex gap-10">
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
