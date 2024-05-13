import React from "react";
import { Link } from "react-router-dom";

const FeaturedPostCard = ({ img, title, tag, desc, date }) => {
  return (
    <div className="card max-md:flex-col flex shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3  gap-5">
      <div className="img w-80 max-md:w-full h-56">
        <img
          src={img}
          className="rounded-md w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="content flex flex-col gap-3">
        <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
          {tag}
        </span>
        <h4 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
          <Link to="/single-blog">{title}</Link>
        </h4>
        <p className="text-slate-800 text-lg">{desc}...</p>
        <div className="dateTime text-slate-800 text-lg flex font-medium gap-3">
          <small>{date}</small>
          <small>2 min read</small>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
