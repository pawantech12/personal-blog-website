import React from "react";
import author3 from "../images/biswajit.webp";
import girlImg from "../images/girl-waring-woolen-sawl.webp";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import Subscribe from "../components/Subscribe";
const SingleBlogPage = () => {
  return (
    <main className=" mt-12 px-24 max-sm:px-4">
      <section className="w-10/12 max-md:w-full mx-auto">
        <div className="blogHeader">
          <h1 className="text-5xl text-slate-800 max-sm:text-3xl max-sm:text-center font-semibold">
            Self-observation is the first step of inner unfolding
          </h1>
          <div className="metaData mt-5 flex max-sm:flex-col max-sm:gap-2 items-center gap-8">
            <div className="author flex items-center gap-2">
              <img
                src={author3}
                width={30}
                height={30}
                className="rounded-full"
                alt=""
              />
              <h4 className="text-base font-medium text-slate-800 hover:underline underline-offset-8">
                <Link to="">Biswajit Saha</Link>
              </h4>
            </div>
            <ul className="list-disc text-base text-neutral-600 flex items-center gap-8">
              <li>March 16, 2022</li>
              <li>2 min read</li>
            </ul>
          </div>
        </div>
        <div className="blogCoverImg mt-8">
          <img
            src={girlImg}
            className="w-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="blogContent mt-3">
          <p className="text-slate-800 text-lg text-justify">
            Almost instantly the whole truth of the transaction seemed to rush
            upon her mind, and her wrath was inconceivably violent. She asked me
            a thousand questions in a breath; but, fortunately, was too vehement
            to attend to my embarrassment, which must otherwise have betrayed my
            knowledge of the deceit. Revenge was her first wish; and she vowed
            she would go the next morning to Justice Fielding, and inquire what
            punishment she might lawfully inflict upon the Captain for his
            assault.
          </p>
          <p className="text-slate-800 text-lg text-justify mt-3">
            I believe we were an hour at Bishopsgate Street before poor Madame
            Duval could allow any thing to be mentioned but her own story; at
            any length, however, Mr. Branghton told her, that M. Du Bois, and
            all his own family, were waiting for her at his house. A
            hackney-coach was then called, and we proceeded to Snow Hill.
          </p>
          <h3 className="text-3xl text-slate-800 font-semibold mt-5">
            I'll never forget the advice my father gave me
          </h3>
          <p className="text-slate-800 text-lg text-justify mt-3">
            Mr. Branghton's house is small and inconvenient; though his shop,
            which takes in all the ground floor, is large and commodious. I
            believe I told you before, that he is a silver-smith.
          </p>
          <div className="blockquote italic px-5 py-4 rounded-lg mt-4 bg-slate-800">
            <FormatQuoteOutlinedIcon className="text-slate-700 !text-7xl " />
            <p className="text-xl text-white">
              Inspiration is a message from your unconscious wisdom telling you
              to go out there and be the fullest, most positive expression of
              you who you REALLY are
            </p>
          </div>
          <ul className="list-disc text-slate-800 text-lg text-justify flex flex-col gap-3 mt-4 px-4">
            <li>
              We were conducted up two pairs of stairs: for the dining-room, Mr.
              Branghton told us, was let. His two daughters, their brother, M.
              Du Bois, and a young man, were at tea.
            </li>
            <li>
              They had waited some time for Madame Duval, but I found they had
              not any expectation that I should accompany her; and the young
              ladies.
            </li>
            <li>
              I believe, were rather more surprised than pleased when I made my
              appearance; for they seemed hurt that I should see their
              apartment.
            </li>
            <li>
              Indeed, I would willingly have saved them that pain, had it been
              in my power.
            </li>
          </ul>
          <div className="share text-center mt-12">
            <h4 className="text-xl text-slate-800 font-medium">
              Share This Article
            </h4>
            <ul className="flex justify-center gap-5 max-sm:gap-3 mt-5">
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <FacebookOutlinedIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <PinterestIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <WhatsAppIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <LinkedInIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <MailOutlineOutlinedIcon />
                </Link>
              </li>
              <li>
                <Link className="bg-zinc-100 p-2 flex justify-center items-center w-fit text-slate-800 rounded-full">
                  <LinkOutlinedIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Subscribe />
    </main>
  );
};

export default SingleBlogPage;
