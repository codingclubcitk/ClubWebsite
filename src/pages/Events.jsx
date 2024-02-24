import React from "react";
import EventsCard from "../Components/EventsCard";
import Footer from "../Components/Footer";
export default function Events() {
  return (
    <>
      <div className="text-3xl font-bold text-center my-5">
        EVENTS & WORKSHOPS
      </div>
      <div className="text-center my-5">
        <p className="mx-7">
          Coding is all about practice and dedication towards learning new
          things. We organise various seminars, workshops, bootcamps, etc to
          help students to get more exposure into various domains of programming
          . It not only helps in improving their thinking ability but also shows
          the right path in various domains.
        </p>
      </div>
      <div className="flex justify-center items-center gap-7 my-5">
        <button className="bg-slate-600 text-white px-10">Recent Events</button>
        <button className="bg-slate-600 text-white px-10">Past Events</button>
      </div>
      <div>
        <EventsCard />
      </div>
      <Footer />
    </>
  );
}
