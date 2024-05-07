import React from "react";
import data from "../data/data";
import LatestPostCard from "./LatestPostCard";
const LatestPost = () => {
  const BlogPosts = data.BlogPosts;
  const latestBlogs = BlogPosts.filter((blog) => blog.posttype === "latest");
  return (
    <section className="latestPost mt-9">
      <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
        Latest Posts
      </h2>
      <div className="cardContainer mt-8 flex flex-col gap-12">
        {latestBlogs.map((blog) => (
          <LatestPostCard key={blog.title} {...blog} />
        ))}

        <div className="flex justify-center">
          <button className="bg-slate-800 rounded-md text-white px-4 py-2 w-fit">
            Show More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
