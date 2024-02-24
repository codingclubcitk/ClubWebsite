import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ data }) {
  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center w-80">
      <div>
        <img className="h-96 my-3" src={data.img} alt="" />
      </div>
      <div className="text-2xl font-bold text-center my-3">{data.name}</div>
      <div className="my-1">Last Date: {data.lastDate}</div>
      <div className="my-1">Event Date: {data.eventDate}</div>
      {data.type == "open" ? (
        <Link
          to="www.google.com"
          className="bg-orange-300 text-white px-5 mt-1 mb-5"
        >
          Register
        </Link>
      ) : (
        <button className="bg-orange-300 text-white px-5 mb-5 mt-1">
          Closed
        </button>
      )}
    </div>
  );
}
