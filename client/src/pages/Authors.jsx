import React from "react";
import data from "../data/data";

const Authors = () => {
  const AuthorData = data.AuthorData;
  return (
    <section className="mt-12 px-24 max-sm:px-4">
      <h2 className="text-center text-5xl text-slate-800 font-semibold">
        Authors
      </h2>
      <div className="authorContainer mt-12 flex flex-wrap gap-8 justify-center">
        {AuthorData &&
          AuthorData.map((item, index) => {
            return (
              <div
                className="group w-80 px-3 py-4 flex flex-col items-center text-center gap-3 border border-neutral-200 rounded-lg"
                key={index}
              >
                <img src={item.img} className="rounded-full w-24" alt="" />
                <h4 className="text-slate-800 font-semibold text-xl group-hover:underline underline-offset-8">
                  {item.name}
                </h4>
                <small className="flex gap-2 text-base text-zinc-600">
                  <span>{item.location} </span> |{" "}
                  <span>{item.posts} posts</span>
                </small>
                <p className="text-slate-800">{item.desc}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Authors;
