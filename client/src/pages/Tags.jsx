import React from "react";
import Tag1 from "../images/tag-inspiration-cover.webp";
import Tag2 from "../images/tag-nature-cover.webp";
import Tag3 from "../images/tag-lifestyle-cover.webp";
import Tag4 from "../images/tag-health-cover.webp";
import Tag5 from "../images/tag-technology-jpg.webp";
import Tag6 from "../images/tag-travel-cover.webp";
import Tag7 from "../images/tag-food-cover.webp";
const Tags = () => {
  return (
    <section className="mt-12 px-24 max-sm:px-4">
      <h2 className="text-center text-5xl text-slate-800 font-semibold">
        Tags
      </h2>
      <div className="tagContainer flex flex-wrap gap-8 mt-12 justify-center">
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag1} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag2} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag3} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag4} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag5} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag6} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5">
          <div className="tagDesc">
            <h5 className="text-xl font-semibold text-slate-800">
              Inspiration
            </h5>
            <small className="text-base text-neutral-600">6 posts</small>
          </div>
          <div className="img">
            <img src={Tag7} className="rounded-md" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tags;
