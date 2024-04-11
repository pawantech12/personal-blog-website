import React from "react";
import author1 from "../images/suravi.webp";
import author2 from "../images/harini.webp";
import author3 from "../images/biswajit.webp";
import author4 from "../images/ishan.webp";
import author5 from "../images/Apurba.webp";

const Authors = () => {
  return (
    <section className="mt-12 px-24">
      <h2 className="text-center text-5xl text-slate-800 font-semibold">
        Authors
      </h2>
      <div className="authorContainer mt-12 flex flex-wrap gap-8 justify-center">
        <div className="authorCard w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg">
          <img src={author1} className="rounded-full w-24" alt="" />
          <h4 className="text-slate-800 font-semibold text-xl">
            Surabhi Gupta
          </h4>
          <small className="flex gap-2 text-base text-zinc-600">
            <span>Kerala </span> | <span>5 posts</span>
          </small>
          <p className="text-slate-800">
            Front end developer by profession. Digital painting enthusiast. She
            also involved in various social activity. Fan of winter and snow.
          </p>
        </div>
        <div className="authorCard w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg">
          <img src={author2} className="rounded-full w-24" alt="" />
          <h4 className="text-slate-800 font-semibold text-xl">
            Harini Banerjee
          </h4>
          <small className="flex gap-2 text-base text-zinc-600">
            <span>Mumbai </span> | <span>4 posts</span>
          </small>
          <p className="text-slate-800">
            Harini Banerjee is an award-winning young blogger and content
            marketer. She also sings sometimes. Frequent traveler, cricket fan,
            and technology enthusiast.
          </p>
        </div>
        <div className="authorCard w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg">
          <img src={author3} className="rounded-full w-24" alt="" />
          <h4 className="text-slate-800 font-semibold text-xl">
            Biswajit Saha
          </h4>
          <small className="flex gap-2 text-base text-zinc-600">
            <span>India </span> | <span>4 posts</span>
          </small>
          <p className="text-slate-800">
            Biswajit Saha is a very simple person. He likes to ride a bicycle
            when free. Prefers tea over coffee. He is currently writing code at
            gbjsolution.com
          </p>
        </div>
        <div className="authorCard w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg">
          <img src={author4} className="rounded-full w-24" alt="" />
          <h4 className="text-slate-800 font-semibold text-xl">Ishan Sharma</h4>
          <small className="flex gap-2 text-base text-zinc-600">
            <span>Delhi </span> | <span>3 posts</span>
          </small>
          <p className="text-slate-800">
            Ishan is back end developer by profession and writer by passion. He
            writes science fiction novels and short story mostly for children.
            He is the always smiling person.
          </p>
        </div>
        <div className="authorCard w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg">
          <img src={author5} className="rounded-full w-24" alt="" />
          <h4 className="text-slate-800 font-semibold text-xl">
            Apurba Talukdar
          </h4>
          <small className="flex gap-2 text-base text-zinc-600">
            <span>Bangalore </span> | <span>3 posts</span>
          </small>
          <p className="text-slate-800">
            Apurba is UI & UX designer by profession, photographer by passion.
            Solo traveller, blogger, badminton player and movie lover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authors;
