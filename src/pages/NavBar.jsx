import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between min-h-24 top-0 bg-cyan-300 text-white sticky min-w-full">
        <div className="text-2xl font-bold ml-7">Coding Club</div>
        <div className="flex gap-5 mr-7">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/event">Event</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
