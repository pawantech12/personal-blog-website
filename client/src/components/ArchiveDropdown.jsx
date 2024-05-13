import React, { useEffect, useRef, useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
const ArchiveDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-10" ref={menuRef}>
      <Link
        to="#"
        className="navLink text-slate-800 font-medium text-base"
        id="archive-menu-button"
        onClick={toggleDropdown}
      >
        Archive
        <ExpandMoreOutlinedIcon className="-mr-1 ml-2 !h-5 !w-5" />
      </Link>

      {isOpen && (
        <div
          className={`origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none `}
        >
          <div className="py-1" role="none">
            <Link
              to="/monthly-archive"
              className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="archive-menu-item-0"
            >
              Monthly archive
            </Link>
            <Link
              to="/yearly-archive"
              className="navLink block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="archive-menu-item-1"
            >
              Yearly archive
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveDropdown;
