import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const temp = "www.google.com";
  return (
    <>
      <div className="mt-7 text-white">
        <div className="flex justify-center items-center gap-12 bg-slate-500 min-h-12">
          <Link to={temp}>LN</Link>
          <Link to={temp}>LN</Link>
          <Link to={temp}>LN</Link>
          <Link to={temp}>LN</Link>
          <Link to={temp}>LN</Link>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-600 h-24">
          <p>Copyright @ 2022 | Designed & Developed by Coding Club CITK </p>
          <p>
            Central Institute of Technology Kokrajhar Website: www.cit.ac.in
          </p>
        </div>
      </div>
    </>
  );
}
