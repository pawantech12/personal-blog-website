import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeroImg from "../images/hero.png";

import Subscribe from "../components/Subscribe";
import FeaturedPost from "../components/FeaturedPost";
import LatestPost from "../components/LatestPost";
const Home = () => {
  return (
    <>
      <main className="px-24 mt-5">
        <section className="hero flex justify-between gap-4 items-center">
          <div className="content flex flex-col gap-6 w-1/2">
            <h1 className="text-slate-800 text-6xl font-bold">
              Hay, I am Pawan
            </h1>
            <p className="text-slate-800 text-2xl">
              An Full Stack developer, Blogger and Problem Solver. On this site
              I write about my learning and experience.
            </p>
            <div className="subscribeBox flex gap-3">
              <input
                className="border border-neutral-200 py-2 px-3 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Your email Address"
              />
              <button className="bg-slate-800 text-white px-3 py-2 rounded-md">
                Subscribe
              </button>
            </div>
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
          </div>
          <div className="img flex justify-center">
            <img src={HeroImg} className="rounded-full" alt="" />
          </div>
        </section>
        <FeaturedPost />
        <LatestPost />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
