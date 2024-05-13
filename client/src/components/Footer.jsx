import React from "react";
import logo from "../images/arun-light-logo.svg";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-24 mt-20 max-sm:px-4 border-t border-zinc-100 py-20">
      <div className="footertop flex justify-between max-md:flex-col max-md:gap-5 max-md:text-center flex-wrap">
        <div className="logoDesc">
          <img src={logo} width={100} className=" mx-auto" alt="" />
          <p>A premium gastby blog template</p>
        </div>

        <div className="quickLinks">
          <h5 className="text-zinc-600 text-sm">Quick Links</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">404 Page</Link>
            </li>
          </ul>
        </div>
        <div className="ArchiveLinks">
          <h5 className="text-zinc-600 text-sm">Archive</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="">Tags</Link>
            </li>
            <li>
              <Link to="">Authors</Link>
            </li>
            <li>
              <Link to="">Monthly Archive</Link>
            </li>
            <li>
              <Link to="">Yearly Archive</Link>
            </li>
          </ul>
        </div>
        <div className="connectLinks">
          <h5 className="text-zinc-600 text-sm">Connect</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="">Twitter</Link>
            </li>
            <li>
              <Link to="">Facebook</Link>
            </li>
            <li>
              <Link to="">Linkedin</Link>
            </li>
            <li>
              <Link to="">Github</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBootom mt-12 flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-between">
        <div className="socialLinkContainer flex gap-3 items-center">
          <h5>Follow:</h5>
          <ul className="flex gap-3 text-slate-800">
            <li>
              <Link>
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link>
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-slate-800 text-sm">
          &copy; {currentYear} Pawan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
