import React from "react";
import Subscribe from "../components/Subscribe";

const Contact = () => {
  return (
    <main className=" mt-12 px-24 max-sm:px-4">
      <section className="w-1/2 max-md:w-11/12 flex flex-col mx-auto">
        <h2 className="text-5xl text-slate-800 font-semibold">Contact Me</h2>
        <p className="text-slate-800 text-lg mt-6">
          Hello! Do you have any question or suggestion about this site, or just
          want to say Hi? Send me a message using below form. I will get back to
          you as soon as possible.
        </p>
        <form action="" className="w-full flex flex-col gap-4 mt-5">
          <input
            type="text"
            className="border border-neutral-200 py-2 h-12 px-3 rounded-md"
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="border border-neutral-200 py-2 h-12 px-3 rounded-md"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="border border-neutral-200 py-2 h-12 px-3 rounded-md"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="border border-neutral-200 py-2 px-3 rounded-md"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button
            className="bg-slate-800 px-4 h-12 mt-3 text-lg text-white rounded-md"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
      <Subscribe />
    </main>
  );
};

export default Contact;
