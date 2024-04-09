import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeroImg from "../images/hero.png";
import girlImg from "../images/girl-waring-woolen-sawl.webp";
const Home = () => {
  return (
    <>
      <main className="px-24 mt-5">
        <section className="hero flex justify-between gap-4 items-center">
          <div className="content flex flex-col gap-6 w-1/2">
            <h1 className="text-slate-800 text-6xl font-bold">
              Hay, I am Arun
            </h1>
            <p className="text-slate-800 text-2xl">
              An architect, software developer, YouTuber and keynote speaker. On
              this site I write about my learning and experience.
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
        <section className="featuredPost mt-9">
          <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
            Featured Posts
          </h2>
          <div className="cardContainer mt-8 flex flex-col gap-12">
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latestPost mt-9">
          <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
            Latest Posts
          </h2>
          <div className="cardContainer mt-8 flex flex-col gap-12">
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="card flex shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] rounded-xl p-3  gap-5">
              <div className="img w-80 h-56">
                <img
                  src={girlImg}
                  className="rounded-md w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="content flex flex-col gap-3">
                <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
                  Lifestyle
                </span>
                <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
                  <Link to="">
                    Self-observation is the first step of inner unfolding
                  </Link>
                </h4>
                <p className="text-slate-800 text-lg">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a...
                </p>
                <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
                  <small>March 16, 2022</small>
                  <small>2 min read</small>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-slate-800 rounded-md text-white px-4 py-2 w-fit">
                Show More Posts
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
