import React, { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
const ArchiveDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <Link
        to="#"
        className="text-slate-800 font-medium text-base"
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
              href="#"
              className="block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="archive-menu-item-0"
            >
              Monthly archive
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-slate-800 font-medium text-base hover:bg-gray-100"
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
