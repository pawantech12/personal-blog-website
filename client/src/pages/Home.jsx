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
        <section className="subscribe bg-slate-800 mt-12 rounded-lg py-10 px-4 flex flex-col items-center gap-3 relative overflow-hidden">
          <svg fill="white" viewBox="0 0 122 55" className="w-28">
            <path d="M80.265 5.637a1.563 1.563 0 000 3.125h.045a1.563 1.563 0 000-3.125h-.045zM59.345 43.791a1.563 1.563 0 000 3.126h24.623a1.563 1.563 0 100-3.126H59.345z"></path>
            <path
              fillRule="evenodd"
              d="M44.922 0h72.763a4.172 4.172 0 014.159 4.158v45.737a4.17 4.17 0 01-4.158 4.158H44.922a4.17 4.17 0 01-4.158-4.158V4.158A4.17 4.17 0 0144.922 0zm38.774 27.442l16.523-12.393h-5.43a1.563 1.563 0 010-3.126h9.597l4.215-3.161H86.715a1.563 1.563 0 010-3.125h25.328c.204 0 .399.039.578.11l3.504-2.629H46.482l32.43 24.324c.583.444 1.478.722 2.392.718.913.004 1.808-.274 2.392-.718zm6.451-.942l-4.582 3.437c-1.247.929-2.765 1.338-4.262 1.34-1.498-.003-3.015-.412-4.261-1.34L72.46 26.5 46.134 50.876a.2.2 0 01-.01.012l-.01.01-.01.009-.014.013-.006.006-.008.009h70.456l-.023-.023a.337.337 0 01-.035-.035L90.147 26.5zM69.95 24.617L43.883 5.067v43.634l26.066-24.084zm22.71 0l26.065-19.55V48.7L92.658 24.617z"
              clipRule="evenodd"
            ></path>
            <path d="M2.654 23.901a1.563 1.563 0 000 3.125h15.383a1.563 1.563 0 100-3.125H2.654zM24.288 25.464c0-.863.7-1.563 1.563-1.563h9.99a1.563 1.563 0 010 3.125h-9.99c-.863 0-1.563-.7-1.563-1.562zM5.373 17.876c0-.863.7-1.563 1.563-1.563h25.328a1.563 1.563 0 110 3.126H6.936c-.863 0-1.563-.7-1.563-1.563zM22.599 39.077a1.563 1.563 0 000 3.125h14.353a1.563 1.563 0 000-3.125H22.6zM.157 40.64c0-.864.7-1.563 1.562-1.563h14.354a1.563 1.563 0 010 3.125H1.719c-.863 0-1.562-.7-1.562-1.563zM15.662 31.489a1.563 1.563 0 000 3.125h16.602a1.563 1.563 0 100-3.125H15.662zM7.162 33.052c0-.864.7-1.563 1.562-1.563h.344a1.563 1.563 0 110 3.125h-.344c-.863 0-1.562-.7-1.562-1.562z"></path>
          </svg>
          <h4 className="text-4xl text-white font-semibold mt-3">
            Subscribe to newsletter
          </h4>
          <p className="text-white text-xl text-center">
            Stay up to date! Get all the latest posts delivered straight to your
            inbox.
          </p>
          <form
            action=""
            className="mt-4 bg-white p-4 rounded-md flex gap-3 w-3/4"
          >
            <input
              type="text"
              className="border w-full border-neutral-200 outline-none h-11 py-2 px-3 rounded-md"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border w-full border-neutral-200 outline-none h-11 py-2 px-3 rounded-md"
              name="email"
              id="email"
              placeholder="Your email address"
            />
            <button
              className="bg-slate-800 px-4 text-white rounded-md"
              type="submit"
            >
              subscribe
            </button>
          </form>
          <div className="circle w-64 h-64 rounded-full border-[50px] border-slate-700 border-opacity-65 absolute left-[-2%] top-[-25%]"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
